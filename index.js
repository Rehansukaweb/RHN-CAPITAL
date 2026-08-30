/**
 * Proxy aman untuk Gemini API (OCR/AI Vision Jurnal Trading RHN CAPITAL).
 *
 * Kenapa ini perlu:
 * - API key Gemini TIDAK BOLEH ditaruh di kode frontend (HTML/JS) yang dibuka browser,
 *   karena siapapun bisa lihat lewat View Source / DevTools, dan Google otomatis
 *   mendeteksi + memberi warning/menonaktifkan key yang bocor ke publik.
 * - Function ini menyimpan key di server (Firebase Secret Manager), lalu frontend
 *   cukup memanggil function ini. Key aslinya tidak pernah dikirim ke browser.
 * - Function ini juga mewajibkan Firebase Auth ID token yang valid, supaya cuma user
 *   yang sudah login di jurnal ini yang bisa pakai kuota Gemini kamu (bukan sembarang orang).
 */

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");

admin.initializeApp();

// Secret ini diisi lewat CLI: firebase functions:secrets:set GEMINI_API_KEY
const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

const GEMINI_MODEL = "gemini-2.5-flash";

exports.ocrVision = onRequest(
  {
    secrets: [GEMINI_API_KEY],
    cors: true, // izinkan dipanggil dari domain manapun tempat jurnal ini di-hosting
    region: "us-central1",
    timeoutSeconds: 120,
    memory: "512MiB",
  },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed, gunakan POST." });
    }

    // --- 1. Wajib login (verifikasi Firebase Auth ID token) ---
    const authHeader = req.headers.authorization || "";
    const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
    if (!idToken) {
      return res.status(401).json({ error: "Token login tidak ditemukan. Silakan login ulang." });
    }
    try {
      await admin.auth().verifyIdToken(idToken);
    } catch (e) {
      return res.status(401).json({ error: "Token login tidak valid atau kedaluwarsa. Silakan login ulang." });
    }

    // --- 2. Validasi input ---
    const { base64, mediaType, instruction } = req.body || {};
    if (!base64 || !instruction) {
      return res.status(400).json({ error: "Field 'base64' dan 'instruction' wajib diisi." });
    }

    // --- 3. Teruskan ke Gemini API pakai key yang aman di server ---
    try {
      const geminiResp = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": GEMINI_API_KEY.value(),
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  { text: instruction },
                  { inlineData: { mimeType: mediaType || "image/png", data: base64 } },
                ],
              },
            ],
            generationConfig: {
              temperature: 0,
              maxOutputTokens: 8192,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      const data = await geminiResp.json();

      if (!geminiResp.ok) {
        return res.status(geminiResp.status).json({
          error: (data && data.error && data.error.message) || "Gemini API mengembalikan error.",
          raw: data,
        });
      }

      return res.status(200).json(data);
    } catch (err) {
      console.error("Gagal memanggil Gemini API:", err);
      return res.status(500).json({ error: "Server proxy gagal menghubungi Gemini: " + err.message });
    }
  }
);
