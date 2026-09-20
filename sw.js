// ==========================================================================
// RHN CAPITAL - Service Worker (mode offline)
// Menyimpan shell aplikasi (halaman HTML + ikon) di cache perangkat, supaya
// saat dibuka tanpa internet (mis. via Appsgeyser web-to-app) yang tampil
// tetap halaman aplikasinya, bukan error "net::ERR_CONNECTION_ABORTED" /
// "net::ERR_INTERNET_DISCONNECTED".
// Data (login, transaksi, saldo) tetap disinkronkan ke Firebase begitu
// online lagi — itu sudah ditangani terpisah oleh Firestore offline
// persistence & localStorage di file HTML utama.
//
// Daftar file di bawah disamakan dengan isi repo GitHub Rehansukaweb/RHN-CAPITAL
// (index.html, manifest.json, RHN LOGO.jpg, serta halaman-halaman satelit
// yang dibuka lewat tombol "HALAMAN RHN CAPITAL / GALERI / JURNAL / ASET / DATA").
// ==========================================================================

const CACHE_NAME = 'rhn-capital-shell-v11';

// File lokal satu repo (root domain rhncapital.online) yang aman di-cache
// dengan fetch biasa (same-origin, tidak butuh CORS khusus). Kalau salah
// satu belum ada / gagal diambil, dilewati diam-diam — tidak menghentikan
// proses install Service Worker.
const SHELL_FILES = [
  './',
  './index.html',
  './RHN LOGO.jpg',
  './manifest.json',
  './latar.html',
  './galeri.html',
  './jurnal.html',
  './aset.html',
  './data.html',
  './ANALISACRYPTO.html',
  './ANALISAFOREX.html',
  './ANALISASAHAM.html'
];

// Library CDN yang dipakai app (Chart.js, SweetAlert2, dll) ikut di-cache
// supaya saat offline app tetap utuh, tidak cuma tampilan kosong.
const CDN_FILES = [
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js',
  // Mesin OCR (Tesseract.js) dipakai fitur verifikasi otomatis bukti bayar QRIS,
  // supaya bisa dimuat lagi walau lagi offline.
  'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.0.4/tesseract.min.js',
  // Modul Firebase (WAJIB di-cache: tanpa ini, seluruh skrip login/PIN/data
  // gagal total saat offline karena import modulenya gagal dimuat).
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // File lokal: fetch biasa juga (bukan cache.add) supaya satu file yang
      // gagal (mis. ANALISACRYPTO.html belum pernah dibuka / 404) tidak bikin
      // seluruh proses precache batal — masing-masing gagal sendiri-sendiri.
      // FIX: sekarang tiap kegagalan di-log ke console (bukan diam-diam
      // ditelan), supaya gampang ketahuan lewat DevTools kalau ada file
      // penting (terutama 3 file Firebase SDK) yang gagal ke-cache saat
      // instalasi — itu yang bikin app "mati total" pas offline.
      const cacheOne = (url) =>
        fetch(url)
          .then((res) => {
            if (!res || (!res.ok && res.type !== 'opaque')) {
              throw new Error('status ' + (res && res.status));
            }
            return cache.put(url, res);
          })
          .catch((err) => console.warn('[SW] Gagal precache:', url, err));

      const shell = SHELL_FILES.map(cacheOne);
      // PENTING: TANPA mode 'no-cors'. Server CDN ini support CORS, jadi pakai
      // fetch normal supaya responsnya valid (bukan "buram"/opaque) dan bisa
      // dipakai sebagai modul JavaScript. Response opaque bikin modul Firebase
      // gagal dipakai walau lagi online (khusus untuk <script type="module">).
      const cdn = CDN_FILES.map(cacheOne);
      return Promise.all([...shell, ...cdn]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Navigasi ke halaman mana pun di situs ini (index.html, atau salah satu
  // halaman satelit seperti aset.html/data.html/dll saat dibuka lewat tombol):
  // coba jaringan dulu, update cache-nya; kalau gagal (offline) fallback ke
  // versi yang tersimpan terakhir kali berhasil dibuka, atau ke index.html.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match('./'))
        )
    );
    return;
  }

  // File statis lokal (logo, manifest, halaman satelit): cache-first,
  // fallback ke jaringan.
  if (SHELL_FILES.some((f) => {
    const name = f.replace('./', '');
    let reqUrlDecoded = req.url;
    try { reqUrlDecoded = decodeURIComponent(req.url); } catch (e) {}
    return req.url.endsWith(name) || reqUrlDecoded.endsWith(name) || req.url.endsWith(encodeURIComponent(name));
  })) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
    return;
  }

  // Library CDN & modul Firebase: NETWORK-FIRST — saat online selalu ambil
  // versi asli dari internet (dan cache-nya diperbarui), baru kalau gagal
  // (offline) fallback ke cache yang tersimpan.
  if (CDN_FILES.includes(req.url)) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Font Google Fonts (CSS + file .woff2 aslinya): sama, network-first lalu
  // cache. File .woff2 URL-nya dinamis (tidak diketahui di awal), makanya
  // dicek pakai hostname, bukan daftar URL tetap seperti CDN_FILES di atas.
  if (req.url.includes('fonts.googleapis.com') || req.url.includes('fonts.gstatic.com')) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // Fallback khusus: file pendukung Tesseract OCR (worker script, inti WASM,
  // data bahasa .traineddata) diambil dari CDN dengan URL yang dinamis/tidak
  // tetap (beda per versi), jadi tidak bisa didaftar satu-satu seperti CDN_FILES
  // di atas. Dibatasi HANYA ke host CDN yang memang dipakai Tesseract — supaya
  // trafik lain (mis. Firestore real-time, Google Auth) TIDAK ikut ke-cache,
  // yang bisa bikin data jadi basi kalau ikut tersangkut aturan ini.
  // NETWORK-FIRST — begitu berhasil diambil sekali secara online, otomatis
  // tersimpan di cache supaya fitur scan OCR bukti bayar tetap bisa dipakai
  // saat offline setelahnya.
  const OCR_SUPPORT_HOSTS = ['tessdata.projectnaptha.com', 'cdn.jsdelivr.net', 'unpkg.com', 'cdnjs.cloudflare.com'];
  let reqHost = '';
  try { reqHost = new URL(req.url).hostname; } catch (e) {}
  if (OCR_SUPPORT_HOSTS.includes(reqHost)) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
