const SHELL = 'rhn-shell-v1';
const MEDIA = 'rhn-media-v1';
const MEDIA_MAX = 800;

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== MEDIA).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function trim(cache) {
  const keys = await cache.keys();
  if (keys.length > MEDIA_MAX) for (const k of keys.slice(0, keys.length - MEDIA_MAX)) await cache.delete(k);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* Halaman utama: ambil dari jaringan, cadangan dari cache saat offline */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(SHELL);
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (_) {
        return (await cache.match(req, { ignoreSearch: true })) || (await cache.match(self.registration.scope, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true })) || Response.error();
      }
    })());
    return;
  }

  const h = url.hostname;
  /* Jangan cache: data Firestore/Auth (sudah offline lewat cache Firestore) & video (range) */
  if (/firestore\.googleapis|identitytoolkit|securetoken|googleapis\.com$/.test(h) && !/fonts\./.test(h)) return;
  if (req.headers.has('range') || /\/video\/upload\//.test(url.pathname)) return;

  const isMedia = h === 'res.cloudinary.com';
  const isLib = /gstatic\.com|jsdelivr\.net|fonts\.googleapis|cdnjs/.test(h) || h === location.hostname;
  if (!isMedia && !isLib) return;

  e.respondWith((async () => {
    const cache = await caches.open(isMedia ? MEDIA : SHELL);
    const hit = await cache.match(req);
    if (hit) return hit;
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque') && res.status !== 206) {
        cache.put(req, res.clone()).then(() => isMedia && trim(cache)).catch(() => {});
      }
      return res;
    } catch (err) {
      return hit || Response.error();
    }
  })());
});
