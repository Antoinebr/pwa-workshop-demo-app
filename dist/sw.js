/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "revision": "08b123f55fe3c2cdbe7ffb45d66ba34f"
  },
  {
    "url": "app.js",
    "revision": "13be373558160743207aca0ad6443416"
  },
  {
    "url": "components/base.js",
    "revision": "ccd97b47fa2b507ab1141854eedcb40b"
  },
  {
    "url": "components/coin.js",
    "revision": "b0e2fae5c7fc08dcf7541309e6866ad9"
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
    "revision": "b8f3c3e1aa9266420d4cf7dbdf1a0333"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/api.cryptonator.com\/api\//, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/(https:\/\/fonts.googleapis.com|https:\/\/unpkg.com)/, workbox.strategies.staleWhileRevalidate(), 'GET');
