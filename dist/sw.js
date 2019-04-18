importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.precaching.precacheAndRoute([
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "5f3bfc494b7d8354305c6fa20948b07c"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "aa71ca0435c6355e5fa0229e20adb107"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "5acb91389354aa0c049731cb15b16b02"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "141d637adf8692e07ae44554829a4258"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "6c02c588d1dc72cd2521f3556ab8f243"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "db92f956c37ca691115d6c327849b4e3"
  },
  {
    "url": "img/logos/bitcoin.svg",
    "revision": "2a4ac9a43a95d361f50010e2f85039b5"
  },
  {
    "url": "app.css",
    "revision": "ffaf9b8e9eb67acf1de3521e1699f3ff"
  },
  {
    "url": "app.js",
    "revision": "c648575dbda0af96386e0b22d4292d06"
  },
  {
    "url": "components/base.js",
    "revision": "2ad365e7c84e69ffc9a40e43e693f014"
  },
  {
    "url": "components/coin.js",
    "revision": "b0e2fae5c7fc08dcf7541309e6866ad9"
  },
  {
    "url": "firebase-messaging-sw.js",
    "revision": "120c360e6455407ff7738e1e866ab014"
  },
  {
    "url": "OneSignalSDKUpdaterWorker.js",
    "revision": "f515315e2e1824a323af6ca6859fc69a"
  },
  {
    "url": "OneSignalSDKWorker.js",
    "revision": "f515315e2e1824a323af6ca6859fc69a"
  },
  {
    "url": "index.html",
    "revision": "2425af017ff31a0c8641b7967de25d2f"
  }
]);


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
