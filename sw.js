/* Caches only this shell (page, manifest, icons) so the app opens instantly.
   It never touches Google traffic — ledger data always comes live from the Sheet. */
const CACHE = 'kaixiao-shell-v4';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
  './icons/kaixiao-192.png', './icons/kaixiao-512.png', './icons/kaixiao-touch-180.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
