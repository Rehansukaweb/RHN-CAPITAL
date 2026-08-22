// RHN CAPITAL - Service Worker
// Menyimpan shell aplikasi (HTML+ikon) di cache perangkat, supaya saat
// dibuka tanpa internet (mis. via app pembungkus web-to-app), yang tampil
// tetap halaman login/aplikasi ini, bukan error "net::ERR_INTERNET_DISCONNECTED".
// Data (login, transaksi, saldo) tetap butuh internet karena disimpan di Firebase.

const CACHE_NAME = 'rhn-capital-shell-v1';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './RHN LOGO.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.all(
        SHELL_FILES.map((url) => cache.add(url).catch(() => {}))
      );
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

  // File statis lain (icon, manifest): cache-first, fallback ke jaringan.
  if (SHELL_FILES.some((f) => req.url.endsWith(f.replace('./', '')))) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
  }
});
