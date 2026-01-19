const CACHE_NAME = "energia-pwa-v1";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/lecturas.html",
  "/prediccion.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const req = event.request;

  // API → siempre red (no cachear)
  if (req.url.includes("/api/")) {
    event.respondWith(
      fetch(req).catch(() =>
        new Response(
          JSON.stringify({ offline: true }),
          { headers: { "Content-Type": "application/json" } }
        )
      )
    );
    return;
  }

  // HTML / assets → cache first
  event.respondWith(
    caches.match(req).then(cached =>
      cached || fetch(req)
    )
  );
});
