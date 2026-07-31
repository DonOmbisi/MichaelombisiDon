const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const STATIC_ASSETS = [
  '/',
  '/projects',
  '/experience',
  '/achievements',
  '/certifications',
  '/resume',
  '/contact',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.json',
  '/Don_Michael_Ombisi_Resume.pdf',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache =>
      Promise.allSettled(STATIC_ASSETS.map(asset => cache.add(asset)))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
            .map(cacheName => caches.delete(cacheName))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.open(STATIC_CACHE).then(cache =>
        cache.match(request).then(cached => {
          const networkFetch = fetch(request).then(networkResponse => {
            if (networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
          return cached || networkFetch;
        })
      )
    );
    return;
  }

  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          caches.open(DYNAMIC_CACHE).then(cache => cache.put(request, networkResponse.clone()));
        }
        return networkResponse;
      })
      .catch(() => caches.match(request))
  );
});
