CACHE_NAME = "cache-v1";
CACHE_ASSETS = [
  //HTML
  "index.html",
  //CSS
  "css/index.css",
  "css/skeleton.css",
  "css/normalize.css",
  //JS
  "js/index.js",
  //IMAGES
  "img/thumb/64.png",
  "img/thumb/144.png",
  "img/thumb/512.png",
  "img/thumb/1366x768.png",
  //OTHER
  "//fonts.googleapis.com/css?family=Raleway:400,300,600"
];
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
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
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
