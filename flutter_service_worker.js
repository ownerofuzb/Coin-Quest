'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "738403b48b0d61f58238c3ab462c5d76",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "12af12421d13c864e5be2c55925fc0a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ba2f83e5c15470566109bae7aa2fc316",
".git/logs/refs/heads/main": "a8a01cfd178c130e86c273d6b182291b",
".git/logs/refs/remotes/origin/main": "0111f40c15cc33cd6637dafa09bbe08f",
".git/objects/02/7ff2d7fdb307f856022beeb2c99a99a8f5f6df": "827677d908917b847c8a2ba9b35f3cc0",
".git/objects/03/c59da6f3f403d735844f7fe0b958e3aa56e26a": "9a431770e1dcf4c9fe628f381c332043",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/ae5dedfdc2aee3474c326b8de2504fb44e6805": "0c7bd3a318eb365a778a118e66637ce9",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/10/17498437f73a19f065ef00552c0e0996ffb583": "f9b89c00e4a7bb0131b19e9bc998e218",
".git/objects/13/312c208c874b4a9a12da794358ea6ddb01efbc": "73f5b2fed26dade9f21dcb452a211c0f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1d/06f5aff3f243343fe7fc5efd916fdd21ccfe5b": "484926d03677a37afd36f389e5bb662c",
".git/objects/1f/1065fc65bff76da98933fa7d139a2cbf7c18a2": "5842b04ed5bdb9a61857275b5b2b53dd",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/1fc206d225ce15a702dc8df3230c7523f67a81": "b30228b9fde66b40baafd3db73f96c7f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/45189bb7fa5b30b3ac9da622e6f06a30805d34": "e990d65a10cea69607374cb2ae37deb7",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/4264727adcbef16117bd5b93ce124337801725": "34e0ab1bb6ccb8bc09ce4d6c87e0b3aa",
".git/objects/4b/71fa9418c3b5e2c61584ce1f779399e754d018": "2d4e2ad29ccf4949a17f032e6a3e4ebc",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/6b/d137859e0e4c8046eeac3d0b3abd37c21bf14c": "78319376890ffb0baa1ee9ef461fb846",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/75/a6106f5e1bf6ba4510612ca1886d062bf545f5": "72746a2eb4a00d2abc95e4f88261fa9f",
".git/objects/83/cade907db9b473d243813f45a4c638eff792a8": "09b810e5f4acf75b02c7896a9aedb578",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2e095856fc4e1fd47014326ba7c5a4200a6897": "22d39172885820db458d8a94c27e4a55",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/2e0eb45a760bbcc16e6479a21b3efc362c272b": "206474c40766ffe083f59a0a054b5fe8",
".git/objects/90/a84335438742843bfbc4caa2054eec4c5944ff": "480f6b7159f545177688142a94d2f33d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/16488569303dc41efe58011a7df3350f29b906": "6070b7519471f9425ddb880100327ef5",
".git/objects/97/b2f40417a5b7fc2d40861415c9a1ec2edea589": "54dad24be347c583d82b85fc6e437cad",
".git/objects/9c/53cef110d27e32190b31185a49c56d4dd31e96": "b55a2707c29ad9ecbe4bbe3cef9146b7",
".git/objects/aa/92207cd9705a79fdf540ed27792d55e6ddbb02": "9f9d097279161bc20bf4fcd25b56fc1a",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b4/387fcddbebd40ac290f54795324dd9a25d0f89": "80fca29d17842669f7a55fb2f7ade9cb",
".git/objects/b7/2154751f16c5ad2485bb5fd19df339dc133977": "b9db466b9103ad6f79b7c02706b9ba55",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/bcdcb9ed41ba284598bebab68c756bc8a83315": "9888b9daa8c65c52f8762eba1949cf68",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c0/901cfd74e533c2f6aae8e3c04c1d0433e7631e": "bd8f713fbbdfa6870e1e35313395053b",
".git/objects/d1/7d66dfab0dfd3da56b3cbe79c8023ba918905d": "471f318c97b5349f818fbeee44915f5b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bae583b2f51dee4a2100ebbe8000999512886b": "7a58c52d08867a5aedb6cbd1815e2bed",
".git/objects/d9/355a2bd410d779d09cf9c2b1e6aff44346280c": "2c8cb8d32b02e80b842c38ddce86be16",
".git/objects/e0/5bee58d074495cdb9a5bb949893290b89c1f69": "cd041593890fe4502f96a1d512969bb5",
".git/objects/e0/f6973d0eda1624af2ea59c78047520ce25bcc2": "8125bd05c79880e39620a6c162ec2154",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7db7b3bec8d301c9119ff8cf2dfd72b2523182": "56239c6f4e719d414311b61b9fd09aca",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/b2374519df64f5a85c9111efddf98643a50320": "ff6ed6aea1898ef47339d5bfa660d2ad",
".git/objects/ff/368f309dcc48c0e0fa2dbf2df7b94e348b6636": "d0e206f3ba7dce4d2c176ce9acd85177",
".git/refs/heads/main": "1d6080a8494722fee82b5bbeed61c779",
".git/refs/remotes/origin/main": "b8e7f465e1af97b8bcf4d3e13cb108dc",
"assets/AssetManifest.bin": "1bba8c0b34bb45da8fdbffd28d6a1a09",
"assets/AssetManifest.bin.json": "bceb42b1a5214fab65921f6fd8d9674d",
"assets/AssetManifest.json": "7ed7d27624b00e41e671fad37f92772a",
"assets/assets/images/bg%2520image%2520land.png": "bdf5cd01126edf3707ac9a993b866de1",
"assets/assets/images/bg%2520image.png": "5c170457e5b95f567d1900b05146eb0b",
"assets/assets/images/fake%2520coin.png": "91cea02807919474a8eea0734cc473dc",
"assets/assets/images/me.jpg": "3f90d3676fac7d7b8eba580b9a0c3bce",
"assets/assets/images/true%2520coin.png": "f5fcb0adf253d87e7ee33cd2020b18aa",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "6e0875152f4d34b919aa9f5b60593f24",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "11f560ca8fd909789d127ffd9ec3d3cf",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "c80dc703aae231544357d079f1c0d0d9",
"icons/Icon-512.png": "9fba8cb6d5227453feae249a14c0c00e",
"icons/Icon-maskable-192.png": "8f7db8f38f5c5a5892b732363a588c90",
"icons/Icon-maskable-512.png": "9fba8cb6d5227453feae249a14c0c00e",
"index.html": "0af9c032c9f7201493318163a8b1c9cf",
"/": "0af9c032c9f7201493318163a8b1c9cf",
"main.dart.js": "9f32ccc3b45a4ef7b1cb385d6a320a33",
"manifest.json": "a20a4adb641298df9d827182c685009a",
"version.json": "d71dd892b2bea6a70b0658d0686f7865"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
