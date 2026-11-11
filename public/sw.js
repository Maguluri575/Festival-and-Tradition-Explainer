const CACHE = 'faithfest-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Network-first with cache fallback
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request).then(x => x || caches.match('/index.html')))
  );
});
