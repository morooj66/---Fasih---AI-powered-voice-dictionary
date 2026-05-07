# Frontend (touch-friendly)

This is a simple accessible UI:
- Tap “ابدأ التسجيل” to record Arabic audio.
- Tap “إرسال” to send it to `POST /api/voice/ask`.
- The app shows the extracted transcript + response text and plays the generated MP3.

## How to run

Serve `frontend/` as static files.

Examples:
- VS Code “Live Server”
- Any static server

Because the app calls the backend at `/api/voice/ask`, the easiest setup is to run the backend and open the frontend from the same origin (or ensure CORS is enabled—which it is in `backend/app.py`).

