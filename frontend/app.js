const recordBtn = document.getElementById("recordBtn");
const sendBtn = document.getElementById("sendBtn");
const audioInput = document.getElementById("audioInput");
const statusEl = document.getElementById("status");
const transcriptEl = document.getElementById("transcript");
const responseTextEl = document.getElementById("responseText");
const audioPlayer = document.getElementById("audioPlayer");

let stream = null;
let recorder = null;
let chunks = [];
let audioBlob = null;

function setStatus(msg) {
  statusEl.textContent = msg || "";
}

function setBusy(isBusy) {
  recordBtn.disabled = isBusy;
  sendBtn.disabled = isBusy || !audioBlob;
  audioInput.disabled = isBusy;
}

function resetResult() {
  transcriptEl.textContent = "-";
  responseTextEl.textContent = "-";
  audioPlayer.removeAttribute("src");
  audioPlayer.load();
}

async function startRecording() {
  resetResult();
  audioBlob = null;
  sendBtn.disabled = true;

  setStatus("جاري بدء التسجيل...");

  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  chunks = [];

  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) chunks.push(e.data);
  };
  recorder.onstop = () => {
    const mimeType = recorder.mimeType || "audio/webm";
    audioBlob = new Blob(chunks, { type: mimeType });
    chunks = [];
    sendBtn.disabled = false;
    setStatus("تم حفظ التسجيل. يمكنك الضغط على إرسال.");
  };

  recorder.start();
  recordBtn.setAttribute("aria-pressed", "true");
  recordBtn.textContent = "إيقاف التسجيل";
}

async function stopRecording() {
  if (!recorder) return;
  setStatus("إيقاف التسجيل...");

  recorder.stop();
  recordBtn.setAttribute("aria-pressed", "false");
  recordBtn.textContent = "ابدأ التسجيل";

  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }
}

recordBtn.addEventListener("click", async () => {
  try {
    if (!recorder || recorder.state === "inactive") {
      await startRecording();
    } else {
      await stopRecording();
    }
  } catch (err) {
    console.error(err);
    setStatus("تعذر الوصول للميكروفون. تأكد من السماح بالإذن.");
    recordBtn.setAttribute("aria-pressed", "false");
    recordBtn.textContent = "ابدأ التسجيل";
    setBusy(false);
  }
});

sendBtn.addEventListener("click", async () => {
  if (!audioBlob) return;

  try {
    setBusy(true);
    setStatus("جارٍ إرسال الصوت إلى الخادم...");

    const formData = new FormData();
    // Backend only needs audio; filename is used for extension.
    formData.append("audio", audioBlob, "recording.webm");

    const resp = await fetch("/api/voice/ask", { method: "POST", body: formData });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.detail || "Request failed");

    transcriptEl.textContent = data.transcript || "-";
    responseTextEl.textContent = data.responseText || "-";

    if (data.audioUrl) {
      audioPlayer.src = data.audioUrl;
      audioPlayer.play().catch(() => {});
    }

    setStatus("تم الاستجابة.");
  } catch (err) {
    console.error(err);
    setStatus("حدث خطأ. تحقق من الخادم أو إعدادات API.");
  } finally {
    setBusy(false);
  }
});

audioInput.addEventListener("change", async () => {
  const file = audioInput.files && audioInput.files[0];
  if (!file) return;

  audioBlob = file;
  sendBtn.disabled = false;
  resetResult();
  setStatus("تم اختيار ملف الصوت. اضغط إرسال.");
});

// Touch accessibility: allow pressing record with pointer events too.
recordBtn.style.touchAction = "manipulation";

