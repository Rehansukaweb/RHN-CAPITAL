// RHN CAPITAL - Service Worker
// Menyimpan shell aplikasi (HTML+ikon) di cache perangkat, supaya saat
// dibuka tanpa internet (mis. via app pembungkus web-to-app), yang tampil
// tetap halaman login/aplikasi ini, bukan error "net::ERR_INTERNET_DISCONNECTED".
// Data (login, transaksi, saldo) tetap butuh internet karena disimpan di Firebase.

const CACHE_NAME = 'rhn-capital-shell-v2';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './RHN LOGO.jpg'
];
// Library CDN yang dipakai app (Chart.js, SweetAlert2, dll) ikut di-cache
// supaya saat offline app tetap utuh, tidak cuma tampilan kosong.
const CDN_FILES = [
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const shell = SHELL_FILES.map((url) => cache.add(url).catch(() => {}));
      const cdn = CDN_FILES.map((url) =>
        fetch(url, { mode: 'no-cors' }).then((res) => cache.put(url, res)).catch(() => {})
      );
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

  // Halaman utama (navigasi): coba jaringan dulu, fallback ke cache shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put('./index.html', clone));
          return res;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // File statis lokal (icon, manifest): cache-first, fallback ke jaringan.
  if (SHELL_FILES.some((f) => req.url.endsWith(f.replace('./', '')))) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
    return;
  }

  // Library CDN (Chart.js, SweetAlert2, dll): cache-first juga, supaya
  // saat offline library-nya tetap ada dan app tidak setengah-jalan.
  if (CDN_FILES.includes(req.url)) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req, { mode: 'no-cors' }).catch(() => cached))
    );
  }
});
