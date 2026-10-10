// ==========================================================================
// RHN CAPITAL - Service Worker (mode offline)
// Menyimpan shell aplikasi (halaman HTML + ikon) di cache perangkat, supaya
// saat dibuka tanpa internet yang tampil tetap halaman aplikasinya.
// Data (login, transaksi, saldo) tetap disinkronkan ke Firebase begitu
// online lagi — itu ditangani terpisah oleh Firestore offline persistence
// & localStorage di file HTML utama.
// ==========================================================================

const CACHE_NAME = 'rhn-capital-shell-v13';

const SHELL_FILES = [
  './',
  './index.html',
  './RHN LOGO.jpg',
  './manifest.json',
  './logo_rhn_oval_192.png',
  './logo_rhn_oval_512.png',
  './latar.html',
  './galeri.html',
  './jurnal.html',
  './aset.html',
  './data.html',
  './ANALISACRYPTO.html',
  './ANALISAFOREX.html',
  './ANALISASAHAM.html'
];

const CDN_FILES = [
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/5.0.4/tesseract.min.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Tiap file gagal sendiri-sendiri, tidak membatalkan seluruh precache.
      const cacheOne = (url) =>
        fetch(url, { cache: 'reload' })
          .then((res) => {
            if (!res || (!res.ok && res.type !== 'opaque')) {
              throw new Error('status ' + (res && res.status));
            }
            return cache.put(url, res);
          })
          .catch((err) => console.warn('[SW] Gagal precache:', url, err));

      const shell = SHELL_FILES.map(cacheOne);
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

// Helper: ambil dari jaringan dulu, simpan ke cache, fallback ke cache kalau offline.
function networkFirst(req) {
  return fetch(req)
    .then((res) => {
      const clone = res.clone();
      caches.open(CACHE_NAME).then((c) => c.put(req, clone));
      return res;
    })
    .catch(() => caches.match(req));
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Navigasi halaman: jaringan dulu, fallback ke cache / index.
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

  // Manifest & ikon logo: SELALU jaringan dulu supaya perubahan ikon langsung terbaca.
  if (
    req.url.includes('manifest.json') ||
    req.url.includes('logo_rhn_oval') ||
    req.url.includes('RHN%20LOGO') ||
    req.url.includes('RHN LOGO')
  ) {
    event.respondWith(networkFirst(req));
    return;
  }

  // File statis lokal lain (halaman satelit): cache-first, fallback jaringan.
  if (SHELL_FILES.some((f) => {
    const name = f.replace('./', '');
    if (!name) return false;
    let reqUrlDecoded = req.url;
    try { reqUrlDecoded = decodeURIComponent(req.url); } catch (e) {}
    return req.url.endsWith(name) || reqUrlDecoded.endsWith(name) || req.url.endsWith(encodeURIComponent(name));
  })) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
    return;
  }

  // Library CDN & modul Firebase: jaringan dulu, fallback cache.
  if (CDN_FILES.includes(req.url)) {
    event.respondWith(networkFirst(req));
    return;
  }

  // Google Fonts (CSS + woff2): jaringan dulu, fallback cache.
  if (req.url.includes('fonts.googleapis.com') || req.url.includes('fonts.gstatic.com')) {
    event.respondWith(networkFirst(req));
    return;
  }

  // File pendukung Tesseract OCR (URL dinamis) — dibatasi ke host CDN tertentu
  // supaya trafik Firestore / Google Auth TIDAK ikut ke-cache.
  const OCR_SUPPORT_HOSTS = ['tessdata.projectnaptha.com', 'cdn.jsdelivr.net', 'unpkg.com', 'cdnjs.cloudflare.com'];
  let reqHost = '';
  try { reqHost = new URL(req.url).hostname; } catch (e) {}
  if (OCR_SUPPORT_HOSTS.includes(reqHost)) {
    event.respondWith(networkFirst(req));
  }
});
