// Secure Service Worker for Showcase Transport PWA
// Version 1.0.1

const CACHE_NAME = 'showcase-transport-v1.0.1';
const RUNTIME_CACHE = 'showcase-transport-runtime';

// Critical resources to cache immediately
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install Service Worker and cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch((error) => {
        // Silent error handling - no console logs in production
      })
  );
});

// Fetch Strategy: Cache First for assets, Network First for pages
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests (except JotForm)
  if (url.origin !== location.origin && !url.origin.includes('jotform.com') && !url.origin.includes('jotfor.ms')) {
    return;
  }

  // Don't cache JotForm requests - always fetch fresh
  if (url.origin.includes('jotform.com') || url.origin.includes('jotfor.ms')) {
    event.respondWith(fetch(request));
    return;
  }

  // Cache First Strategy for static assets (CSS, JS, images, fonts)
  if (
    request.url.match(/\.(css|js|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/) ||
    request.url.includes('/assets/')
  ) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // Not in cache, fetch from network
          return fetch(request).then((response) => {
            // Only cache valid responses
            if (response && response.status === 200 && response.type === 'basic') {
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return response;
          });
        })
        .catch(() => {
          // Offline fallback - return empty response
          return new Response('Offline', {
            status: 503,
            statusText: 'Service Unavailable'
          });
        })
    );
  } 
  // Network First Strategy for HTML pages (always get fresh content)
  else {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful HTML responses for offline use
          if (response && response.status === 200 && response.type === 'basic') {
            const responseToCache = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Offline fallback - serve cached version
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Fallback to index.html
            return caches.match('/index.html');
          });
        })
    );
  }
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      return self.clients.claim();
    })
    .catch((error) => {
      // Silent error handling
    })
  );
});

// Handle service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
