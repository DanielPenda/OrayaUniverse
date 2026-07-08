const CACHE_NAME = 'oraya-universe-v2';
const scopeUrl = new URL(self.registration.scope);
const appShellPaths = [
  './',
  'index.html',
  'manifest.json',
  'OrayaIcones/oraya-icon.svg',
  'OrayaIcones/oraya-logo-horizontal.svg',
  'OrayaIcones/oraya-icon-16.png',
  'OrayaIcones/oraya-icon-32.png',
  'OrayaIcones/oraya-icon-152.png',
  'OrayaIcones/oraya-icon-180.png',
  'OrayaIcones/oraya-icon-192.png',
  'OrayaIcones/oraya-icon-512.png',
];
const APP_SHELL = appShellPaths.map((path) => new URL(path, scopeUrl).toString());
const INDEX_URL = new URL('index.html', scopeUrl).toString();

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          const shouldCache =
            response.ok &&
            (event.request.destination === 'image' ||
              event.request.destination === 'script' ||
              event.request.destination === 'style' ||
              event.request.mode === 'navigate');

          if (shouldCache) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }

          return response;
        })
        .catch(() => caches.match(INDEX_URL));
    }),
  );
});
