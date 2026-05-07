from typing import Any, Dict, Optional, Tuple

from services.siwar_service import normalize_arabic


def extract_intent_and_word(user_text: str, lexicon: Dict[str, Dict[str, Any]]) -> Tuple[str, Optional[str]]:
    """
    Extracts:
    - intent: meaning/root/synonyms/antonyms/example
    - word: the first lexicon key that appears inside the question

    Prototype logic from the notebook.
    """

    text = normalize_arabic(user_text)

    # Determine question type
    if any(key in text for key in ["معنى", "ما معنى", "اش معنى"]):
        intent = "meaning"
    elif any(key in text for key in ["جذر", "اصل", "أصل"]):
        intent = "root"
    elif any(key in text for key in ["مرادف", "مرادفات"]):
        intent = "synonyms"
    elif any(key in text for key in ["ضد", "عكس", "أضداد", "اضداد"]):
        intent = "antonyms"
    elif any(key in text for key in ["مثال", "جملة"]):
        intent = "example"
    else:
        intent = "meaning"

    # Find the word from the lexicon keys. The CSV lexicon uses diacritics in
    # many lemmas, while user questions often omit them.
    found_word: Optional[str] = None
    for word, entry in lexicon.items():
        candidates = {word, str(entry.get("word", ""))}
        normalized_candidates = {normalize_arabic(candidate) for candidate in candidates}
        if any(candidate and candidate in text for candidate in normalized_candidates):
            found_word = word
            break

    return intent, found_word
