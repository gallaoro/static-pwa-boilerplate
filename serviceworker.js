CACHE_NAME = "default-v1";
CACHE_ASSETS = [];
TAG = "[SW]: ";

self.addEventListener("install", event => {
  console.log(TAG, "installing");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      cache.addAll(CACHE_ASSETS)
    })
  )
})

self.addEventListener("activate", event => {
  console.log(TAG, "activated");
})

self.addEventListener("fetch", event => {
  console.log(TAG, "fetching");
  event.respondWith(fetch(event.request));
})

self.addEventListener("push", event => {
  console.log(TAG, "push message recived");
  event.waitUntil(new Promise(function(resolve, reject){
    if (!(self.Notification && self.Notification.permission === 'granted')) {
      return;
    }

    var data = {};
    if (event.data) {
      try{
        data = event.data.json();
      }catch(error){
        data={}
      }
    }
    var title = data.title || "Nuova notifica";
    var message = data.message || "Questo e solo un messaggio fisso.";

    var options= { body: message, tag: "simple-1"}

    var myNotification = self.registration.showNotification(title, options).then(resolve());
  }))
})
