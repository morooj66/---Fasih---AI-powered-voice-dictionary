from typing import Any, Dict, Optional

from services.intent_extractor import extract_intent_and_word
from services.response_builder import build_response
from services.siwar_service import has_wake_word, remove_wake_word


def answer_text_question(
    text: str,
    lexicon: Dict[str, Dict[str, Any]],
    require_wake_word: bool = False,
) -> Dict[str, Any]:
    """
    Converted from the notebook's `faseeh_voice_assistant` flow.

    It receives recognized or typed Arabic text, optionally removes the wake word,
    extracts intent + target word, then builds the Arabic answer from the lexicon.
    """

    transcript = (text or "").strip()
    wake_word_detected = has_wake_word(transcript)

    if require_wake_word and not wake_word_detected:
        response_text = "نادني أولًا بقولك: فصيح، ثم اسأل عن معنى الكلمة أو جذرها أو مرادفها."
        return {
            "transcript": transcript,
            "cleanedText": None,
            "wakeWordDetected": False,
            "intent": "wake_word_missing",
            "word": None,
            "responseText": response_text,
        }

    cleaned_text = remove_wake_word(transcript) if wake_word_detected else transcript
    intent, word = extract_intent_and_word(cleaned_text, lexicon)
    response_text = build_response(intent, word, lexicon)

    return {
        "transcript": transcript,
        "cleanedText": cleaned_text,
        "wakeWordDetected": wake_word_detected,
        "intent": intent,
        "word": word,
        "responseText": response_text,
    }


def answer_audio_file(
    audio_path: str,
    speech_to_text: Any,
    lexicon: Dict[str, Dict[str, Any]],
    require_wake_word: bool = False,
) -> Dict[str, Any]:
    """
    Converted from the notebook's audio path:
    Whisper transcription -> text assistant pipeline.
    """

    stt_result = speech_to_text.transcribe(audio_path)
    transcript = (stt_result.get("text") or "").strip()
    answer = answer_text_question(transcript, lexicon, require_wake_word=require_wake_word)
    answer["sttResult"] = stt_result
    return answer
