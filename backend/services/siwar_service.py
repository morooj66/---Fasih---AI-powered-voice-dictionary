import re


# Wake words from the prototype notebook
WAKE_WORDS = ["فصيح", "يا فصيح", "فسيح"]  # فسيح احتياط لو Whisper أخطأ بالكتابة


def _strip_arabic_diacritics(text: str) -> str:
    # Tashkeel + dagger alif + small high/low marks.
    return re.sub(r"[\u064B-\u0652\u0670]", "", text)


def normalize_arabic(text: str) -> str:
    text = (text or "").strip()
    text = _strip_arabic_diacritics(text)
    text = text.replace("ـ", "")  # tatweel

    # Keep the prototype behavior (remove some punctuation and normalize spaces)
    text = re.sub(r"[؟?،,.!]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def has_wake_word(user_text: str) -> bool:
    normalized = normalize_arabic(user_text)
    return any(wake_word in normalized for wake_word in WAKE_WORDS)


def remove_wake_word(user_text: str) -> str:
    cleaned = normalize_arabic(user_text)
    for wake_word in WAKE_WORDS:
        cleaned = cleaned.replace(wake_word, "")
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned

