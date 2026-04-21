// Đổi version → browser tự xoá cache cũ và tải file mới
const CACHE_NAME = 'bemon-pos-v3';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './logo.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Xoá tất cả cache cũ của bemon-pos
          if (cacheName !== CACHE_NAME && cacheName.startsWith('bemon-pos')) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
