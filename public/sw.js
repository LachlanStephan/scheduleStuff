self.addEventListener("install", (event) => {
  console.log("Hello world from the Service Worker");
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([]);
    })
  );
});
