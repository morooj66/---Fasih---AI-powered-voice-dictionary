from typing import Any, Dict


def build_response(intent: str, word: str | None, lexicon: Dict[str, Dict[str, Any]]) -> str:
    if not word:
        return "عذرًا، لم أتمكن من تحديد الكلمة المطلوبة."

    if word not in lexicon:
        return f"عذرًا، لم أجد الكلمة {word} في المعجم الحالي."

    entry = lexicon[word]
    meanings = entry.get("meanings", [])

    if not meanings:
        return f"وجدت الكلمة {word}، لكن لا توجد معان مسجلة لها حالياً."

    first_meaning = meanings[0]
    meaning_text = str(first_meaning.get("meaning", "غير متوفر")).rstrip(".。، ")
    example_text = str(first_meaning.get("example", "غير متوفر")).rstrip(".。، ")

    if intent == "meaning":
        response = f"{meaning_text}."
    elif intent == "root":
        response = f"جذر كلمة {word} هو: {entry.get('root', 'غير متوفر')}."
    elif intent == "synonyms":
        synonyms = first_meaning.get("synonyms", [])
        response = (
            f"من مرادفات كلمة {word}: " + "، ".join(synonyms) + "."
            if synonyms
            else f"لا توجد مرادفات مسجلة لكلمة {word} حالياً."
        )
    elif intent == "antonyms":
        antonyms = first_meaning.get("antonyms", [])
        response = (
            f"من أضداد كلمة {word}: " + "، ".join(antonyms) + "."
            if antonyms
            else f"لا توجد أضداد مسجلة لكلمة {word} حالياً."
        )
    elif intent == "example":
        response = f"مثال على كلمة {word}: {example_text}."
    else:
        response = f"معنى كلمة {word}: {meaning_text}."

    return response
