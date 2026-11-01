/* RHN Gallery - Service Worker (offline) */
const SHELL = 'rhn-shell-v2';
const MEDIA = 'rhn-media-v2';
const MAX_MEDIA = 1500;

const PRECACHE = [
  'https://cdn.jsdelivr.net/npm/sweetalert2@11',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
];
const SHELL_HOSTS = ['www.gstatic.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(SHELL).then((c) =>
    Promise.all(PRECACHE.map((u) => c.add(new Request(u, { mode: 'cors' })).catch(() => {})))
  ));
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('rhn-') && k !== SHELL && k !== MEDIA).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function trimMedia(c) {
  const keys = await c.keys();
  if (keys.length > MAX_MEDIA) {
    for (let i = 0; i < keys.length - MAX_MEDIA; i++) await c.delete(keys[i]);
  }
}

async function navHandler(req) {
  const c = await caches.open(SHELL);
  try {
    const r = await Promise.race([
      fetch(req),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 5000))
    ]);
    if (r && r.ok) c.put(req, r.clone());
    return r;
  } catch (err) {
    return (await c.match(req, { ignoreSearch: true })) ||
           (await c.match(self.registration.scope)) ||
           (await c.match('./')) ||
           Response.error();
  }
}

async function swr(e, req) {
  const c = await caches.open(SHELL);
  const hit = await c.match(req);
  const net = fetch(req).then((r) => {
    if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone());
    return r;
  }).catch(() => null);
  if (hit) { e.waitUntil(net); return hit; }
  return (await net) || Response.error();
}

async function mediaHandler(req) {
  const c = await caches.open(MEDIA);
  const hit = await c.match(req.url);
  if (hit) return hit;
  try {
    let r;
    try { r = await fetch(req.url, { mode: 'cors' }); } catch (x) { r = await fetch(req); }
    if (r && r.ok && r.type !== 'opaque') { await c.put(req.url, r.clone()); trimMedia(c); }
    return r;
  } catch (err) {
    return Response.error();
  }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.headers.has('range') || req.destination === 'video' || req.destination === 'audio') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') { e.respondWith(navHandler(req)); return; }
  if (url.hostname === 'res.cloudinary.com') {
    if (/\/video\/upload\//.test(url.pathname) && !/\.(jpg|jpeg|png|webp)$/i.test(url.pathname)) return;
    e.respondWith(mediaHandler(req)); return;
  }
  if (SHELL_HOSTS.includes(url.hostname) || url.origin === self.location.origin) {
    e.respondWith(swr(e, req));
  }
});

/* Pesan dari halaman: simpan halaman & thumbnail agar bisa dibuka offline */
let queue = [], running = 0;
async function pump() {
  while (running < 4 && queue.length) {
    const u = queue.shift();
    running++;
    (async () => {
      try {
        const c = await caches.open(MEDIA);
        if (!(await c.match(u))) {
          const r = await fetch(u, { mode: 'cors' });
          if (r.ok) { await c.put(u, r); }
        }
      } catch (x) {}
      running--; pump();
    })();
  }
  if (!queue.length && running === 0) { try { trimMedia(await caches.open(MEDIA)); } catch (x) {} }
}
self.addEventListener('message', (e) => {
  const d = e.data || {};
  if (d.type === 'CACHE_URLS' && Array.isArray(d.urls)) {
    e.waitUntil(caches.open(SHELL).then((c) => Promise.all(d.urls.map((u) => c.add(u).catch(() => {})))));
  } else if (d.type === 'CACHE_MEDIA' && Array.isArray(d.urls)) {
    queue.push(...d.urls); pump();
  }
});
