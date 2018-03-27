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
    "url": "img/icons/icon-144x144.png",
    "revision": "af69642d4c8190a3702de21bd551cf23"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "648f1655d73f6d1cb37405384cf2ab9c"
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
    "url": "app.css",
    "revision": "08b123f55fe3c2cdbe7ffb45d66ba34f"
  },
  {
    "url": "app.js",
    "revision": "3a18222de76a296f23f56fdd4ad3e83c"
  },
  {
    "url": "components/base.js",
    "revision": "7565b2f43ca01bed7b48ebae92378052"
  },
  {
    "url": "components/coin.js",
    "revision": "7b9a4e8aabb092d0d2a29d56fbd16041"
  },
  {
    "url": "index.html",
    "revision": "01e1c32b1e4a2c17d8ea525ba3c03ada"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/api.cryptonator.com\/api\//, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/(https:\/\/fonts.googleapis.com|https:\/\/unpkg.com)/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/https:\/\/cdn.worldvectorlogo.com\//, workbox.strategies.cacheFirst(), 'GET');
