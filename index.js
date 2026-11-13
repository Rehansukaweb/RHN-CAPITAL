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


// ==========================================================================
// NOTIFIKASI PUSH (FCM) RHN CAPITAL — terkirim walau aplikasi sudah ditutup
// ==========================================================================
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

const db = admin.firestore();
const TZ = "Asia/Jakarta";
const LIFETIME = "9999-12-31T23:59:59.000Z";
const rp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");
const todayKey = () => new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 10);

// Kirim ke semua perangkat milik satu user; token mati otomatis dibersihkan.
async function pushToUser(uid, title, body, tag) {
  const snap = await db.collection("users").doc(uid).collection("devices").get();
  const items = [];
  snap.forEach((d) => { const t = d.data().fcmToken; if (t) items.push({ ref: d.ref, token: t }); });
  if (!items.length) return;
  const res = await admin.messaging().sendEachForMulticast({
    tokens: items.map((i) => i.token),
    notification: { title, body },
    data: { tag: tag || "rhn-fcm" },
    webpush: { headers: { Urgency: "high", TTL: "86400" } },
  });
  const dead = [];
  res.responses.forEach((r, i) => {
    const c = r.error && r.error.code;
    if (c === "messaging/registration-token-not-registered" || c === "messaging/invalid-registration-token") {
      dead.push(items[i].ref.update({ fcmToken: admin.firestore.FieldValue.delete() }));
    }
  });
  await Promise.all(dead);
}

async function eachUser(fn) {
  let last = null;
  for (;;) {
    let q = db.collection("users").orderBy(admin.firestore.FieldPath.documentId()).limit(300);
    if (last) q = q.startAfter(last);
    const snap = await q.get();
    if (snap.empty) break;
    for (const d of snap.docs) { try { await fn(d.id, d.data()); } catch (e) { console.error(d.id, e); } }
    last = snap.docs[snap.docs.length - 1];
    if (snap.size < 300) break;
  }
}

// 1) Pengingat catat transaksi: tiap hari 20.00 WIB, hanya jika hari ini belum ada catatan
exports.pengingatHarian = onSchedule({ schedule: "0 20 * * *", timeZone: TZ }, async () => {
  const today = todayKey();
  await eachUser(async (uid, u) => {
    if (u.isAdmin || u.role === "admin") return;
    const q = await db.collection("users").doc(uid).collection("transactions").where("date", "==", today).limit(5).get();
    if (q.docs.some((d) => !d.data().isDeleted)) return;
    await pushToUser(uid, "📝 Jangan lupa catat transaksi", "Belum ada catatan hari ini. Catat pemasukan & pengeluaranmu sekarang.", "rhn-daily");
  });
});

// 2) Langganan hampir habis (sisa 0-3 hari): tiap hari 09.00 WIB
exports.langgananHampirHabis = onSchedule({ schedule: "0 9 * * *", timeZone: TZ }, async () => {
  await eachUser(async (uid, u) => {
    const e = u.subscriptionExpiry;
    if (!e || e === LIFETIME) return;
    const days = Math.ceil((new Date(e) - Date.now()) / 86400000);
    if (isNaN(days) || days < 0 || days > 3) return;
    await pushToUser(uid, "⏳ Langganan hampir habis", days === 0 ? "Langgananmu berakhir hari ini. Perpanjang agar tetap aktif." : "Langgananmu berakhir " + days + " hari lagi. Perpanjang agar tetap aktif.", "rhn-sub");
  });
});

// 3) Balasan Customer Service dari admin: langsung terkirim saat admin membalas
exports.balasanCS = onDocumentCreated("support_chats/{uid}/messages/{id}", async (event) => {
  const m = event.data && event.data.data();
  if (!m || m.sender !== "admin") return;
  await pushToUser(event.params.uid, "💬 Balasan Customer Service", String(m.text || "").slice(0, 120), "rhn-cs-" + event.params.id);
});

// 4) Budget hampir habis (80%) / terlampaui (100%): saat ada pengeluaran baru
exports.budgetTransaksi = onDocumentCreated("users/{uid}/transactions/{id}", async (event) => {
  const t = event.data && event.data.data();
  if (!t || t.isDeleted || t.type !== "expense" || !t.category || !t.date) return;
  const uid = event.params.uid;
  const pref = await db.collection("users").doc(uid).collection("settings").doc("preferences").get();
  const budgets = pref.exists ? pref.data().budgets : null;
  const lim = budgets && +budgets[t.category];
  if (!lim) return;
  const month = String(t.date).slice(0, 7);
  const q = await db.collection("users").doc(uid).collection("transactions").where("date", ">=", month + "-01").where("date", "<=", month + "-31").get();
  let spent = 0;
  q.forEach((d) => { const x = d.data(); if (!x.isDeleted && x.type === "expense" && x.category === t.category) spent += +x.amount || 0; });
  const before = spent - (+t.amount || 0);
  const lvl = (s) => { const p = s / lim * 100; return p >= 100 ? 100 : (p >= 80 ? 80 : 0); };
  const nl = lvl(spent);
  if (!nl || nl === lvl(before)) return;
  await pushToUser(uid, nl === 100 ? "🚨 Budget " + t.category + " terlampaui" : "⚠️ Budget " + t.category + " hampir habis", rp(spent) + " dari " + rp(lim) + " (" + Math.round(spent / lim * 100) + "%)", "rhn-budget-" + t.category + "-" + nl);
});
