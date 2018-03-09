self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('your-magic-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/site.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
