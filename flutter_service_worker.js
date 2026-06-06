'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "151132ba758f51ba81da6d7bd815fb76",
"assets/AssetManifest.bin.json": "9ab290eb11ae2d7ac3e9340b6b8cd21a",
"assets/assets/brand/favicon-96x96.png": "bf703a9c970c75832aa46781c0e8ba0f",
"assets/assets/brand/favicon.svg": "fd02344d2b98c2c0b09bc957947d9296",
"assets/assets/brand/logo.jpg": "68665526a9a43457135c77160bf46a23",
"assets/assets/images/M_R60679.jpg": "0d90bfb7856454346d8df5458ccd7711",
"assets/assets/images/M_R60795.jpg": "02ca28d2f9064557d8be344405390b0c",
"assets/assets/images/M_R60933.jpg": "754ce16312bd029775c02ba271e87085",
"assets/assets/images/M_R61146.jpg": "02747de9e1093ad5902fc32f3762ade2",
"assets/assets/images/M_R61249.jpg": "55f7ba904b6b20c48b8a7bf316495b10",
"assets/assets/images/M_R61325.jpg": "36e6f4a78380fac99feba0dde4abfedc",
"assets/assets/images/M_R65941-Enhanced-NR.jpg": "5dd6ab57dd423ba0401f80774fa88fd5",
"assets/assets/images/M_R66839-Enhanced-NR.jpg": "0a51ebe923eb62e092624f199736cd86",
"assets/assets/images/M_R66878-Enhanced-NR.jpg": "6cb2f87324a677dd590900814bebbae9",
"assets/assets/images/M_R66882-Enhanced-NR.jpg": "9d112b4077d3ba964a373825fb93bed3",
"assets/assets/images/M_R69843-Enhanced-NR-2.jpg": "4293e3a2d93d78e2492d2e439a2a65b7",
"assets/assets/images/M_R69906-Enhanced-NR.jpg": "75a27c7ce1c2ffe36b86ae7e46945368",
"assets/assets/images/M_R69968-Enhanced-NR.jpg": "20bc67a3211fe0065af23c3484d809b7",
"assets/assets/images/M_R69980-Enhanced-NR-2.jpg": "542423b585c38763789d7d22596bedda",
"assets/assets/images/nightmue_13.jpg": "7b52d1112a3e64957ccc8f1de79729f7",
"assets/assets/images/nightmue_14.jpg": "89e1771d8d4ef474c775b96daa06075c",
"assets/assets/images/nightmue_15.jpg": "0107084ff9aeddcbb1a2a5b889e39d47",
"assets/assets/images/nightmue_16.jpg": "db6698ce71596103903d51e02e224e03",
"assets/assets/images/nightmue_3.jpg": "49732eb4b2e2d9228ce201d9f08b3553",
"assets/assets/images/nightmue_4.jpg": "aef5af6c197745292ca7b06bcafed498",
"assets/assets/images/nightmue_8.jpg": "0683de95ab116eea46eeeaa4ed1a7455",
"assets/assets/images/nightmue_9.jpg": "10bbabd5404f63805e37c8e6714849b1",
"assets/assets/images/thatR1bro_2.jpg": "837fe853fa8821c286e906532c279b44",
"assets/assets/images/turtle_v1.jpg": "cf6992557feeccb77d84850c1edc482e",
"assets/assets/videos/MotoAmerica.mp4": "67548499bfc31fcac23755b85febb107",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "822d025617cd0168149a60aecc642b9d",
"assets/NOTICES": "52294db5a7ca510cff372ed4c9e017ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "dd9bb25cf4062de2ffba80a5283d7e26",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "402e516e63e60d3cb766bff229df6cd0",
"icons/apple-touch-icon.png": "13d52d218839c47b2981146998bedfcf",
"icons/Icon-maskable-192.png": "83e3bee8bd800d64f7b812d260ca97ca",
"icons/Icon-maskable-512.png": "f55d057e6cf4f94e69b98e1b7a10d04f",
"index.html": "644202369d133923c56f5162a17514ee",
"/": "644202369d133923c56f5162a17514ee",
"main.dart.js": "4316016c53a9c35fde9b6c439f826bfd",
"manifest.json": "a38ac2593cb17f122925e44b33d4f5c5",
"version.json": "b1bd36b650c7d7a1797138148754154e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
