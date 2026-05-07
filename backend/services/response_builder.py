from typing import Any, Dict


def build_response(intent: str, word: str | None, lexicon: Dict[str, Dict[str, Any]]) -> str:
    """
    Builds an Arabic response exactly like the prototype notebook:
    - meaning / root / synonyms / antonyms / example
    - uses the first meaning entry for that word
    """

    if not word:
        return (
            "عذرًا، لم أتمكن من تحديد الكلمة المطلوبة. "
            "يمكنك أن تسأل مثل: ما معنى رصين؟"
        )

    if word not in lexicon:
        return f"عذرًا، لم أجد الكلمة {word} في المعجم الحالي."

    entry = lexicon[word]
    meanings = entry.get("meanings", [])

    if not meanings:
        return f"وجدت الكلمة {word}، لكن لا توجد معانٍ مسجلة لها حاليًا."

    first_meaning = meanings[0]

    if intent == "meaning":
        response = f"معنى كلمة {word}: {first_meaning.get('meaning', 'غير متوفر')}."
        if len(meanings) > 1:
            response += f" ولهذه الكلمة {len(meanings)} معانٍ مسجلة."

    elif intent == "root":
        response = f"جذر كلمة {word} هو: {entry.get('root', 'غير متوفر')}."

    elif intent == "synonyms":
        synonyms = first_meaning.get("synonyms", [])
        if synonyms:
            response = f"من مرادفات كلمة {word}: " + "، ".join(synonyms) + "."
        else:
            response = f"لا توجد مرادفات مسجلة لكلمة {word} حاليًا."

    elif intent == "antonyms":
        antonyms = first_meaning.get("antonyms", [])
        if antonyms:
            response = f"من أضداد كلمة {word}: " + "، ".join(antonyms) + "."
        else:
            response = f"لا توجد أضداد مسجلة لكلمة {word} حاليًا."

    elif intent == "example":
        response = f"مثال على كلمة {word}: {first_meaning.get('example', 'غير متوفر')}."

    else:
        response = f"معنى كلمة {word}: {first_meaning.get('meaning', 'غير متوفر')}."

    source = first_meaning.get("source")
    if source:
        response += f" المصدر: {source}."

    return response

