self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('vegano-app').then(cache => {
      return cache.addAll([
        '/manifiesto-vegan/',
        '/manifiesto-vegan/index.html',
        '/manifiesto-vegan/manifest.json',
        '/manifiesto-vegan/vegan-icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
