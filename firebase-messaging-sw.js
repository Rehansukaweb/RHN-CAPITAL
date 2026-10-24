// firebase-messaging-sw.js  -> taruh di root hosting, sejajar dengan index.html & sw.js
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCx04v3ppq3DxbXDg0PrWBeJYIZjmJF9cg",
  authDomain: "rhn-capital.firebaseapp.com",
  projectId: "rhn-capital",
  storageBucket: "rhn-capital.firebasestorage.app",
  messagingSenderId: "74905216682",
  appId: "1:74905216682:web:4687a5b0bd7bcac09292d3"
});

const messaging = firebase.messaging();

// Pesan "data-only" ditampilkan manual; pesan "notification" otomatis ditampilkan FCM.
messaging.onBackgroundMessage(function (p) {
  if (p.notification) return;
  const d = p.data || {};
  self.registration.showNotification(d.title || 'RHN CAPITAL', { body: d.body || '', data: { url: d.url || '/' } });
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return clients.openWindow(url);
  }));
});
