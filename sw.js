importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.precaching.precacheAndRoute([]);


workbox.precaching.suppressWarnings();

workbox.routing.registerRoute(
    /(https:\/\/fonts.googleapis.com|https:\/\/unpkg.com)/,
    workbox.strategies.staleWhileRevalidate(),
    'GET'
);

workbox.routing.registerRoute(
    /https:\/\/api.cryptonator.com\/api\//,
    workbox.strategies.networkFirst(),
    'GET'
);
