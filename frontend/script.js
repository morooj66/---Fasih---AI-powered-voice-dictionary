const wakeBtn = document.getElementById("wakeBtn");
const statusText = document.getElementById("statusText");
const wordInput = document.getElementById("wordInput");
const searchBtn = document.getElementById("searchBtn");
const speakBtn = document.getElementById("speakBtn");
const readBtn = document.getElementById("readBtn");
const clearBtn = document.getElementById("clearBtn");
const voiceSelect = document.getElementById("voiceSelect");
const testVoiceBtn = document.getElementById("testVoiceBtn");

const resultBox = document.getElementById("resultBox");
const resultWord = document.getElementById("resultWord");
const meaning = document.getElementById("meaning");
const root = document.getElementById("root");
const synonyms = document.getElementById("synonyms");
const antonyms = document.getElementById("antonyms");
const example = document.getElementById("example");
const source = document.getElementById("source");

const BACKEND_ASK_TEXT_URL = "http://127.0.0.1:8000/api/voice/ask_text";

let lastResultText = "";
let lastAudioUrl = "";
let recognition = null;
let hasStarted = false;
let arabicVoice = null;
let availableVoices = [];

window.addEventListener("load", () => {
  wakeBtn.focus();
  setStatus("جاهز للبدء");
  loadArabicVoice();
});

function setStatus(text) {
  statusText.textContent = text;
}

function loadArabicVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  availableVoices = window.speechSynthesis.getVoices();
  populateVoiceSelect();

  const savedVoice = localStorage.getItem("fasihVoiceURI");
  arabicVoice =
    availableVoices.find((voice) => voice.voiceURI === savedVoice) ||
    chooseBestArabicVoice(availableVoices);

  return arabicVoice;
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = loadArabicVoice;
}

function chooseBestArabicVoice(voices) {
  const arabicVoices = voices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("ar"));

  const preferredNames = [
    "Microsoft Hoda",
    "Microsoft Naayf",
    "Microsoft Hamed",
    "Microsoft Zariyah",
    "Google العربية",
    "Google Arabic",
    "Maged",
    "Majed",
    "Tarik",
    "Zeina",
    "Laila",
    "ar-SA"
  ];

  return (
    preferredNames
      .map((name) => arabicVoices.find((voice) => `${voice.name} ${voice.lang}`.toLowerCase().includes(name.toLowerCase())))
      .find(Boolean) ||
    arabicVoices.find((voice) => voice.lang === "ar-SA") ||
    arabicVoices[0] ||
    null
  );
}

function populateVoiceSelect() {
  if (!voiceSelect) {
    return;
  }

  const selectedValue = localStorage.getItem("fasihVoiceURI") || "";
  const arabicVoices = availableVoices.filter((voice) => voice.lang && voice.lang.toLowerCase().startsWith("ar"));

  voiceSelect.innerHTML = '<option value="">اختيار أفضل صوت تلقائياً</option>';

  arabicVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.voiceURI;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });

  voiceSelect.value = selectedValue;
}

function speakArabic(text, afterSpeak) {
  if (!("speechSynthesis" in window)) {
    setStatus("متصفحك لا يدعم النطق الصوتي.");
    if (afterSpeak) afterSpeak();
    return;
  }

  const selectedVoice = arabicVoice || loadArabicVoice();
  const cleanText = cleanSpokenArabic(text);

  // Some browsers load voices after the first user action.
  if (!selectedVoice && window.speechSynthesis.getVoices().length === 0) {
    window.setTimeout(() => speakArabic(cleanText, afterSpeak), 150);
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = "ar-SA";
  utterance.voice = selectedVoice;
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.volume = 1;
  utterance.onend = () => {
    if (afterSpeak) afterSpeak();
  };

  window.speechSynthesis.speak(utterance);
}

function cleanSpokenArabic(text) {
  return String(text || "")
    .replace(/AI Glossary - Dataset/gi, "قاموس الذكاء الاصطناعي")
    .replace(/A\/B/gi, "أي بي")
    .replace(/\bDataset\b/gi, "")
    .replace(/\bGlossary\b/gi, "قاموس")
    .replace(/\bAI\b/gi, "الذكاء الاصطناعي")
    .replace(/\s+/g, " ")
    .trim();
}

function fullBackendAudioUrl(audioUrl) {
  if (!audioUrl) {
    return "";
  }

  return audioUrl.startsWith("http") ? audioUrl : `http://127.0.0.1:8000${audioUrl}`;
}

function playBackendAudio(audioUrl, fallbackText) {
  const fullUrl = fullBackendAudioUrl(audioUrl);

  if (!fullUrl) {
    speakArabic(fallbackText);
    return;
  }

  window.speechSynthesis.cancel();

  const audio = new Audio(fullUrl);
  audio.onended = () => {
    setStatus("تمت قراءة النتيجة");
  };
  audio.onerror = () => {
    setStatus("تعذر تشغيل الصوت المحسن. سيتم استخدام صوت المتصفح.");
    speakArabic(fallbackText);
  };
  audio.play().catch(() => {
    setStatus("تعذر تشغيل الصوت المحسن. سيتم استخدام صوت المتصفح.");
    speakArabic(fallbackText);
  });
}

function normalizeArabic(text) {
  return text
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/ـ/g, "")
    .replace(/[إأآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\u0600-\u06FF\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compactArabic(text) {
  return normalizeArabic(text).replace(/[\s/-]/g, "");
}

function extractTargetWord(text) {
  let cleaned = normalizeArabic(text);
  const removablePhrases = [
    "يا فصيح",
    "فصيح",
    "ما معني",
    "وش معني",
    "معني",
    "ما جذر",
    "وش جذر",
    "جذر",
    "اعطني مرادف",
    "اعطيني مرادف",
    "هات مرادف",
    "مرادف",
    "اعطني ضد",
    "اعطيني ضد",
    "هات ضد",
    "ضد"
  ];

  removablePhrases.forEach((phrase) => {
    cleaned = cleaned.replaceAll(normalizeArabic(phrase), " ");
  });

  const words = cleaned.replace(/\s+/g, " ").trim().split(" ");
  return words.filter(Boolean).pop() || "";
}

function findWord(userText) {
  const normalizedInput = normalizeArabic(userText);
  const compactInput = compactArabic(userText);
  const targetWord = extractTargetWord(userText);
  const compactTargetWord = compactArabic(targetWord);
  const entries = [...mockData].sort((a, b) => b.word.length - a.word.length);

  return entries.find((item) => {
    const normalizedWord = normalizeArabic(item.word);
    const compactWord = compactArabic(item.word);
    return (
      normalizedWord === targetWord ||
      compactWord === compactTargetWord ||
      normalizedInput.includes(normalizedWord) ||
      compactInput.includes(compactWord)
    );
  });
}

function backendEntryToResult(entry) {
  if (!entry) {
    return null;
  }

  return {
    word: entry.word || "-",
    root: entry.root || "غير متوفر",
    meaning: entry.meaning || "غير متوفر",
    synonyms: normalizeList(entry.synonyms),
    antonyms: normalizeList(entry.antonyms),
    example: entry.example || "غير متوفر",
    source: entry.source || "الخادم"
  };
}

function normalizeList(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map((item) => String(item || "").trim())
    .filter((item) => item && item !== "-" && item !== "غير متوفر");
}

async function searchBackend(userText) {
  const response = await fetch(BACKEND_ASK_TEXT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: userText })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.detail || "تعذر الاتصال بالخادم.");
  }

  return {
    result: backendEntryToResult(data.entry),
    answerText: data.responseText || data.answer_text || "",
    audioUrl: data.audioUrl || data.audio_url || "",
    transcript: data.transcript || userText
  };
}

function renderChips(element, items) {
  element.innerHTML = "";

  const visibleItems = normalizeList(items);

  if (!visibleItems.length) {
    const chip = document.createElement("span");
    chip.className = "chip chip-muted";
    chip.textContent = "غير متوفر";
    element.appendChild(chip);
    return;
  }

  visibleItems.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    element.appendChild(chip);
  });
}

function fillResult(result) {
  resultWord.textContent = result.word;
  meaning.textContent = result.meaning;
  root.textContent = result.root && result.root !== "-" ? result.root : "غير متوفر";
  renderChips(synonyms, result.synonyms);
  renderChips(antonyms, result.antonyms);
  example.textContent = result.example;
  source.textContent = result.source;
}

function showEmptyResult(message) {
  resultBox.classList.remove("hidden");
  resultBox.classList.add("empty-state");
  fillResult({
    word: "لم يتم العثور على الكلمة",
    meaning: message,
    root: "-",
    synonyms: [],
    antonyms: ["-"],
    example: "-",
    source: "النسخة التجريبية"
  });
}

function showResult(result, spokenText, audioUrl = "") {
  resultBox.classList.remove("hidden");
  resultBox.classList.remove("empty-state");
  fillResult(result);

  // Keep the spoken answer short and Arabic-only. The full details stay visible in the card.
  lastResultText = buildSpokenResult(result, spokenText);
  lastAudioUrl = audioUrl;

  setStatus("تم العثور على النتيجة");
  speakArabic(lastResultText);
}

function buildSpokenResult(result, spokenText) {
  const meaning = String(result.meaning || "").trim();
  return cleanSpokenArabic(meaning);
}

async function searchWord() {
  const userText = wordInput.value.trim();

  if (!userText) {
    const message = "اكتب أو قل كلمة أولاً.";
    setStatus(message);
    speakArabic(message);
    return;
  }

  setStatus("جاري البحث...");

  try {
    const backendResponse = await searchBackend(userText);

    if (backendResponse.result) {
      showResult(backendResponse.result, backendResponse.answerText, backendResponse.audioUrl);
      return;
    }
  } catch (error) {
    console.info("Backend unavailable, using local mock data.", error);
  }

  const result = findWord(userText);

  if (!result) {
    const message = "لم أجد هذه الكلمة في المعجم الحالي.";
    showEmptyResult(message);
    lastResultText = message;
    setStatus("لم يتم العثور على الكلمة");
    speakArabic(message);
    return;
  }

  showResult(result);
}

function startVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    const message = "عذرًا، متصفحك لا يدعم الاستماع الصوتي. جرب استخدام متصفح كروم.";
    setStatus(message);
    speakArabic(message);
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "ar-SA";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    setStatus("فصيح يستمع الآن...");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    wordInput.value = transcript;
    setStatus(`سمعت: ${transcript}`);
    searchWord();
  };

  recognition.onerror = (event) => {
    let message = "لم أسمعك بوضوح. حاول مرة أخرى.";

    if (event.error === "not-allowed") {
      message = "لم يتم السماح باستخدام المايك. يمكنك كتابة السؤال هنا.";
      wordInput.focus();
    }

    setStatus(message);
    speakArabic(message);
  };

  recognition.onend = () => {
    if (!wordInput.value.trim()) {
      setStatus("جاهز للتحدث مرة أخرى");
    }
  };

  try {
    recognition.start();
  } catch (error) {
    const message = "حدث خطأ أثناء تشغيل المايك. حاول مرة أخرى.";
    setStatus(message);
    speakArabic(message);
  }
}

function activateFasih() {
  // Prevent duplicate activation from quick taps or from touch followed by click.
  if (hasStarted) {
    return;
  }

  hasStarted = true;

  const intro =
    "سيطلب المتصفح إذن استخدام المايك. استخدم قارئ الشاشة لاختيار سماح للمتابعة.";

  setStatus("فصيح يتحدث الآن...");
  speakArabic(intro, () => {
    setStatus("سيتم طلب إذن المايك الآن");
    startVoiceRecognition();
  });
}

function startFasihFromPage(event) {
  if (hasStarted) {
    return;
  }

  // Before Fasih starts, any tap/click on the first screen starts the app.
  event.preventDefault();
  activateFasih();
}

wakeBtn.addEventListener("click", activateFasih);

// The wake card supports Enter and Space for keyboard and screen-reader users.
wakeBtn.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    activateFasih();
  }
});

document.addEventListener("click", startFasihFromPage);
document.addEventListener("touchstart", startFasihFromPage, { passive: false });

searchBtn.addEventListener("click", searchWord);

speakBtn.addEventListener("click", () => {
  setStatus("فصيح يتحدث الآن...");
  speakArabic("قل سؤالك الآن.", startVoiceRecognition);
});

readBtn.addEventListener("click", () => {
  if (lastResultText) {
    speakArabic(lastResultText);
  } else {
    const message = "لا توجد نتيجة بعد.";
    setStatus(message);
    speakArabic(message);
  }
});

clearBtn.addEventListener("click", () => {
  wordInput.value = "";
  resultBox.classList.add("hidden");
  resultBox.classList.remove("empty-state");
  lastResultText = "";
  lastAudioUrl = "";
  setStatus("");
  window.speechSynthesis.cancel();
  wakeBtn.focus();
});

voiceSelect.addEventListener("change", () => {
  if (voiceSelect.value) {
    localStorage.setItem("fasihVoiceURI", voiceSelect.value);
  } else {
    localStorage.removeItem("fasihVoiceURI");
  }

  arabicVoice = loadArabicVoice();
  setStatus("تم تغيير الصوت.");
});

testVoiceBtn.addEventListener("click", () => {
  speakArabic("هذا اختبار لصوت فصيح.");
});

wordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWord();
  }
});
