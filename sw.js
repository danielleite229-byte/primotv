self.addEventListener('install', e => {
  e.waitUntil(caches.open('primotv-v1').then(c => c.addAll(['/','/index.html','/manifest.json','/channels.json','/icons/icon-192.png'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});