

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v2').then(cache => {
      return cache.addAll(['./res/404.jpg', './', './index.html']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => {
        return res || fetch(event.request);
      })
      .catch(() => {
        return caches.match('./res/404.jpg');
      })
  );

});
