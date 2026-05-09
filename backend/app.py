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

from services.assistant_service import answer_audio_file, answer_text_question
from services.lexicon_service import LexiconService
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

app = FastAPI(title="Fasih")
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
text_to_speech: Optional[TextToSpeech] = None
speech_to_text: Any = None


def _first_meaning(entry: Optional[Dict[str, Any]]) -> Dict[str, Any]:
    if not entry:
        return {}

    meanings = entry.get("meanings", [])
    if meanings:
        return meanings[0]

    return {}


def _entry_payload(word: Optional[str]) -> Optional[Dict[str, Any]]:
    if not word or not lexicon_service:
        return None

    entry = lexicon_service.lexicon.get(word)
    if not entry:
        return None

    first_meaning = _first_meaning(entry)
    synonyms = first_meaning.get("synonyms") or []
    antonyms = first_meaning.get("antonyms") or []

    return {
        "word": entry.get("word") or word,
        "root": entry.get("root") or "غير متوفر",
        "meaning": first_meaning.get("meaning") or "غير متوفر",
        "example": first_meaning.get("example") or "غير متوفر",
        "synonyms": synonyms,
        "antonyms": antonyms,
        "source": first_meaning.get("source") or "غير متوفر",
    }


def _safe_tts(response_text: str, file_id: str) -> tuple[Optional[str], Optional[str]]:
    if os.getenv("ENABLE_EXTERNAL_TTS", "false").lower() != "true":
        return None, "External TTS is disabled."

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


def _get_speech_to_text() -> Any:
    global speech_to_text

    if speech_to_text is None:
        from services.speech_to_text import SpeechToText

        speech_to_text = SpeechToText()

    return speech_to_text


def _convert_to_wav(input_path: Path) -> Path:
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
    global lexicon_service, text_to_speech

    lexicon_service = LexiconService(LEXICON_PATH)
    text_to_speech = TextToSpeech()


@app.get("/api/health")
def health() -> Dict[str, Any]:
    return {"status": "ok"}


@app.post("/api/voice/ask_text")
async def ask_text(req: AskTextRequest) -> JSONResponse:
    if not lexicon_service:
        raise HTTPException(status_code=503, detail="Server not ready yet")

    transcript = (req.text or "").strip()
    answer = answer_text_question(transcript, lexicon_service.lexicon)
    cleaned_text = answer["cleanedText"]
    intent = answer["intent"]
    word = answer["word"]
    response_text = answer["responseText"]

    file_id = uuid.uuid4().hex
    audio_url, tts_error = _safe_tts(response_text, file_id)

    return JSONResponse(
        {
            "success": True,
            "transcript": transcript,
            "cleanedText": cleaned_text,
            "intent": intent,
            "word": word,
            "entry": _entry_payload(word),
            "responseText": response_text,
            "audioUrl": audio_url,
            "answer_text": response_text,
            "audio_url": audio_url,
            "tts_error": tts_error,
        }
    )


@app.post("/api/voice/ask")
async def voice_ask(audio: UploadFile = File(...)) -> JSONResponse:
    if not lexicon_service:
        raise HTTPException(status_code=503, detail="Server not ready yet")

    ext = Path(audio.filename or "").suffix.lower() or ".webm"
    file_id = uuid.uuid4().hex
    upload_path = UPLOAD_DIR / f"{file_id}{ext}"

    try:
        with upload_path.open("wb") as f:
            shutil.copyfileobj(audio.file, f)

        wav_path = _convert_to_wav(upload_path)
        answer = answer_audio_file(str(wav_path), _get_speech_to_text(), lexicon_service.lexicon)
        transcript = answer["transcript"]
        cleaned_text = answer["cleanedText"]
        intent = answer["intent"]
        word = answer["word"]
        response_text = answer["responseText"]
        audio_url, tts_error = _safe_tts(response_text, file_id)

        return JSONResponse(
            {
                "success": True,
                "transcript": transcript,
                "cleanedText": cleaned_text,
                "intent": intent,
                "word": word,
                "entry": _entry_payload(word),
                "responseText": response_text,
                "audioUrl": audio_url,
                "answer_text": response_text,
                "audio_url": audio_url,
                "tts_error": tts_error,
            }
        )
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc
