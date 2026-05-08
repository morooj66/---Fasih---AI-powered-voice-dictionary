import re


WAKE_WORDS = ["فصيح", "يا فصيح", "فسيح"]


def _strip_arabic_diacritics(text: str) -> str:
    return re.sub(r"[\u064B-\u0652\u0670]", "", text)


def normalize_arabic(text: str) -> str:
    text = (text or "").strip()
    text = _strip_arabic_diacritics(text)
    text = text.replace("ـ", "")
    text = text.replace("أ", "ا").replace("إ", "ا").replace("آ", "ا")
    text = text.replace("ى", "ي").replace("ة", "ه")
    text = re.sub(r"[؟?،,.!]", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def has_wake_word(user_text: str) -> bool:
    normalized = normalize_arabic(user_text)
    return any(normalize_arabic(wake_word) in normalized for wake_word in WAKE_WORDS)


def remove_wake_word(user_text: str) -> str:
    cleaned = normalize_arabic(user_text)
    for wake_word in WAKE_WORDS:
        cleaned = cleaned.replace(normalize_arabic(wake_word), "")
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    return cleaned
