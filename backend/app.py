import os
import shutil
import subprocess
import uuid
from pathlib import Path
from typing import Any, Dict, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from services.intent_extractor import extract_intent_and_word
from services.lexicon_service import LexiconService
from services.response_builder import build_response
from services.speech_to_text import SpeechToText
from services.siwar_service import has_wake_word, remove_wake_word
from services.text_to_speech import TextToSpeech


load_dotenv()

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
STATIC_DIR = BASE_DIR / "static"
AUDIO_DIR = STATIC_DIR / "audio"
UPLOAD_DIR = STATIC_DIR / "uploads"

LEXICON_PATH = DATA_DIR / "lexicon.json"

os.makedirs(AUDIO_DIR, exist_ok=True)
os.makedirs(UPLOAD_DIR, exist_ok=True)


app = FastAPI(title="Faseeh (فصيح)")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static", StaticFiles(directory=str(STATIC_DIR)), name="static")


class AskTextRequest(BaseModel):
    text: str
    trigger_mode: Optional[str] = None


lexicon_service: Optional[LexiconService] = None
speech_to_text: Optional[SpeechToText] = None
text_to_speech: Optional[TextToSpeech] = None


def _safe_tts(response_text: str, file_id: str) -> tuple[Optional[str], Optional[str]]:
    if not text_to_speech:
        return None, "Text-to-speech service is not ready."

    out_mp3_path = AUDIO_DIR / f"{file_id}.mp3"
    try:
        text_to_speech.text_to_speech_arabic(response_text, str(out_mp3_path))
    except Exception as exc:
        if out_mp3_path.exists():
            out_mp3_path.unlink()
        return None, str(exc)

    return f"/static/audio/{out_mp3_path.name}", None


def _convert_to_wav(input_path: Path) -> Path:
    """
    Whisper works reliably with wav; the prototype notebook used ffmpeg in Colab.
    """
    rate = int(os.getenv("FFMPEG_OUTPUT_WAV_RATE", "16000"))
    channels = int(os.getenv("FFMPEG_OUTPUT_WAV_CHANNELS", "1"))

    out_path = input_path.with_suffix(".wav")
    cmd = [
        "ffmpeg",
        "-y",
        "-i",
        str(input_path),
        "-ar",
        str(rate),
        "-ac",
        str(channels),
        str(out_path),
    ]
    proc = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if proc.returncode != 0:
        raise RuntimeError(f"ffmpeg failed: {proc.stderr[-800:]}")
    return out_path


@app.on_event("startup")
def _startup() -> None:
    global lexicon_service, speech_to_text, text_to_speech

    lexicon_service = LexiconService(LEXICON_PATH)
    speech_to_text = SpeechToText()
    text_to_speech = TextToSpeech()


@app.get("/api/health")
def health() -> Dict[str, Any]:
    return {"status": "ok"}


@app.post("/api/voice/ask")
async def voice_ask(audio: UploadFile = File(...)) -> JSONResponse:
    if not lexicon_service or not speech_to_text or not text_to_speech:
        raise HTTPException(status_code=503, detail="Server not ready yet")

    ext = Path(audio.filename or "").suffix.lower()
    if not ext:
        ext = ".webm"

    file_id = uuid.uuid4().hex
    upload_path = UPLOAD_DIR / f"{file_id}{ext}"

    try:
        with upload_path.open("wb") as f:
            shutil.copyfileobj(audio.file, f)

        wav_path = _convert_to_wav(upload_path)

        stt_result = speech_to_text.transcribe(str(wav_path))
        transcript = (stt_result.get("text") or "").strip()

        # Wake word logic from the notebook
        if not has_wake_word(transcript):
            response_text = (
                "نادني أولًا بقولك: فصيح، ثم اسأل عن معنى الكلمة أو جذرها أو مرادفها."
            )
            intent = "wake_word_missing"
            word = None
            cleaned_text: Optional[str] = None
        else:
            cleaned_text = remove_wake_word(transcript)
            intent, word = extract_intent_and_word(cleaned_text, lexicon_service.lexicon)
            response_text = build_response(intent, word, lexicon_service.lexicon)

        audio_url, tts_error = _safe_tts(response_text, file_id)

        return JSONResponse(
            {
                "success": True,
                "transcript": transcript,
                "cleanedText": cleaned_text,
                "intent": intent,
                "word": word,
                "responseText": response_text,
                "audioUrl": audio_url,
                "answer_text": response_text,
                "audio_url": audio_url,
                "tts_error": tts_error,
            }
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/voice/ask_text")
async def ask_text(req: AskTextRequest) -> JSONResponse:
    if not lexicon_service or not speech_to_text or not text_to_speech:
        raise HTTPException(status_code=503, detail="Server not ready yet")

    transcript = (req.text or "").strip()

    if not has_wake_word(transcript):
        response_text = (
            "نادني أولًا بقولك: فصيح، ثم اسأل عن معنى الكلمة أو جذرها أو مرادفها."
        )
        intent = "wake_word_missing"
        word = None
        cleaned_text: Optional[str] = None
    else:
        cleaned_text = remove_wake_word(transcript)
        intent, word = extract_intent_and_word(cleaned_text, lexicon_service.lexicon)
        response_text = build_response(intent, word, lexicon_service.lexicon)

    file_id = uuid.uuid4().hex
    audio_url, tts_error = _safe_tts(response_text, file_id)

    return JSONResponse(
        {
            "success": True,
            "transcript": transcript,
            "cleanedText": cleaned_text,
            "intent": intent,
            "word": word,
            "responseText": response_text,
            "audioUrl": audio_url,
            "answer_text": response_text,
            "audio_url": audio_url,
            "tts_error": tts_error,
        }
    )
