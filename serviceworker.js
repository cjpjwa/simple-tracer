//########################################
// serviceworker for simple tracer
// Version: 25.05.2020 11:30
//########################################

var cacheName = 'simpletracer_20_05_25_11_30';
var urlsToCache = [
	'/',
	'/index.htm',
	'/crypto-js.js',
	'/apple-touch-icon.png',
	'/favicon.ico',
	'/icon_144.png',
	'/icon_192.png',
	'/icon_512.png',
	'/manifest.json'
];

//########################################
//delete old cache
self.addEventListener('activate', function(event) {
	//console.log('SW activate');
	event.waitUntil(
		caches.keys().then(function(keys) {
			return Promise.all(keys.map(function(key) {
				if (key !== cacheName) {
					//console.log('Delete cache: ', key);
					return caches.delete(key);
				}
			}));
		}).then(function() {
			//console.log('SW claim', cacheName);
			return self.clients.claim();
		})
	);
});

//########################################
//setup the cache
self.addEventListener('install', function(event) {
	//console.log('SW install');
	event.waitUntil(
		caches.open(cacheName).then(function(cache) {
			//console.log('Open cache');
			return cache.addAll(urlsToCache);
		}).then(function() {
			//console.log('Skip waiting');
			return self.skipWaiting();
		})
	);
});

//########################################
//fetch the cache
self.addEventListener('fetch', function(event) {
    //console.log('SW fetch: ', event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(pResponse) {
			if (pResponse) {
				//console.log('Load from cache: ', event.request.url);
				return pResponse;
			} else {
				//console.log('Load from network: ', event.request.url);
				return fetch(event.request);
			}
		})
	);
});

