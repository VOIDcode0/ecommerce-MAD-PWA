const CACHE_NAME = 'ecommerce-v2';
const urlsToCache = ['./', './index.html', './manifest.json', './logo192.png', './logo512.png'];

self.addEventListener('install', (event) => {
  console.log('SW Installed');

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW Activated');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }

          return null;
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-orders') {
    console.log('Syncing Orders...');

    event.waitUntil(
      new Promise((resolve) => {
        console.log('Orders synced to server');
        resolve();
      })
    );
  }
});

self.addEventListener("push", (event) => {
  console.log("Push event triggered");

  let data = "New Offer Available!";

  if (event.data) {
    data = event.data.text();
  }

  const options = {
    body: data,
    icon: "./images/logo.png"
  };

  event.waitUntil(
    self.registration.showNotification("E-commerce App", options)
  );
});
