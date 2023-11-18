const staticCarlsNotes = "carls-notes-v1";
const assets = [
  "/",
  "/index.html",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/icon.png",
  "/icon.svg",
  "/assets/**/*.{js,css}",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticCarlsNotes).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return (
        res ||
        fetch(fetchEvent.request).catch(() => {
          return caches.match("/offline.html");
        })
      );
    })
  );
});
