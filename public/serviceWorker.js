const staticCarlsNotes = "carls-notes-v1";
const assets = [
  "/",
  "/index.html",
  "/**/*.{png,svg}",
  "/**/*.{jsx,css}"
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
