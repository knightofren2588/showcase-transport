// Optimized Service Worker for Showcase Transport PWA
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
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching critical resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) // Activate immediately
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

  // Skip cross-origin requests
  if (url.origin !== location.origin) {
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
            // Cache successful responses
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return response;
          });
        })
        .catch(() => {
          // Offline fallback for images
          if (request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
            return caches.match('/offline-image.svg');
          }
        })
    );
  } 
  // Network First Strategy for HTML pages (always get fresh content)
  else {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache the fetched page for offline use
          if (response && response.status === 200) {
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
            // Offline page fallback
            return caches.match('/index.html');
          });
        })
    );
  }
});

// Activate Service Worker and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('Service Worker activated');
      return self.clients.claim(); // Take control of all pages immediately
    })
  );
});

// Background sync for offline form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  // Future: Handle offline form submissions
  console.log('Syncing offline forms...');
}

// Handle service worker updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
