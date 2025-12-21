const CACHE_NAME = 'portfolio-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

const STATIC_ASSETS = [
  '/',
  '/projects',
  '/experience',
  '/resume',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.json',
  // Critical images
  '/host3-project.webp',
  '/aura3-project.webp',
  '/aqua-horizon-project.webp',
  '/drug-research-project.webp',
  '/flood-analyzer-project.webp',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE)
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external requests
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  // Strategy: Stale While Revalidate for static assets
  if (STATIC_ASSETS.some(asset => url.pathname === asset)) {
    event.respondWith(
      caches.open(STATIC_CACHE)
        .then((cache) => cache.match(request))
        .then((response) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              caches.open(STATIC_CACHE)
                .then((cache) => cache.put(request, networkResponse.clone()));
              return networkResponse;
            });
          return response || fetchPromise;
        })
    );
    return;
  }

  // Strategy: Network First for dynamic content
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // Cache successful responses
        if (networkResponse.ok) {
          caches.open(DYNAMIC_CACHE)
            .then((cache) => cache.put(request, networkResponse.clone()));
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(request);
      })
  );
});
