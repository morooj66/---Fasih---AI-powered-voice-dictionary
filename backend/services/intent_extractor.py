from typing import Any, Dict, Optional, Tuple

from services.siwar_service import normalize_arabic


def compact_text(text: str) -> str:
    return normalize_arabic(text).replace(" ", "").replace("-", "").replace("/", "")


def extract_intent_and_word(user_text: str, lexicon: Dict[str, Dict[str, Any]]) -> Tuple[str, Optional[str]]:
    text = normalize_arabic(user_text)
    compact_input = compact_text(user_text)

    if any(key in text for key in ["معني", "ما معني", "وش معني"]):
        intent = "meaning"
    elif any(key in text for key in ["جذر", "اصل"]):
        intent = "root"
    elif any(key in text for key in ["مرادف", "مرادفات"]):
        intent = "synonyms"
    elif any(key in text for key in ["ضد", "عكس", "اضداد"]):
        intent = "antonyms"
    elif any(key in text for key in ["مثال", "جمله"]):
        intent = "example"
    else:
        intent = "meaning"

    # Search longer terms first so "شبكة عصبية" wins before "شبكة".
    entries = sorted(
        lexicon.items(),
        key=lambda item: len(normalize_arabic(str(item[1].get("word") or item[0]))),
        reverse=True,
    )

    for word, entry in entries:
        candidates = {word, str(entry.get("word", ""))}
        for candidate in candidates:
            normalized_candidate = normalize_arabic(candidate)
            compact_candidate = compact_text(candidate)
            if not normalized_candidate:
                continue
            if normalized_candidate in text or compact_candidate in compact_input:
                return intent, word

    return intent, None
