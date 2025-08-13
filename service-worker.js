const CACHE_NAME = 'meu-site-cache-v1';
const FILES_TO_CACHE = [
  '/meu-pwa/',
  '/meu-pwa/index.html',
  '/meu-pwa/style.css',
  '/meu-pwa/script.js',
  '/meu-pwa/manifest.json',
  '/meu-pwa/assets/icon-192.png',
  '/meu-pwa/assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
