const BUILD_VERSION = '__ORAYA_BUILD_VERSION__';
const CACHE_NAME = `oraya-universe-${BUILD_VERSION}`;
const LEGACY_CACHE_NAME = 'oraya-universe-v2';
const scopeUrl = new URL(self.registration.scope);
const LEGACY_MIGRATION_URL = new URL('__legacy-migration__', scopeUrl).toString();
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
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(APP_SHELL);

      if (await caches.has(LEGACY_CACHE_NAME)) {
        await cache.put(LEGACY_MIGRATION_URL, new Response('pending'));
        await self.skipWaiting();
      }
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const currentCache = await caches.open(CACHE_NAME);
      const isLegacyMigration = Boolean(await currentCache.match(LEGACY_MIGRATION_URL));
      const keys = await caches.keys();

      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
      await self.clients.claim();

      if (isLegacyMigration) {
        await currentCache.delete(LEGACY_MIGRATION_URL);
        const windowClients = await self.clients.matchAll({ type: 'window' });
        await Promise.all(windowClients.map((client) => client.navigate(client.url)));
      }
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match(INDEX_URL))),
    );
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
              event.request.destination === 'style');

          if (shouldCache) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }

          return response;
        })
        .catch(() => caches.match(INDEX_URL));
    }),
  );
});
