Vue.use(VueMaterial.default)

new Vue({
  el: '#app'
})



/**
 *  One Signal 
 *  Notification part
 */


// function subscribe() {
//   OneSignal.push(["registerForPushNotifications"]);
//   event.preventDefault();
// }

// var OneSignal = OneSignal || [];
// /* This example assumes you've already initialized OneSignal */
// OneSignal.push(function() {
//   // If we're on an unsupported browser, do nothing
//   if (!OneSignal.isPushNotificationsSupported()) return;
//   OneSignal.isPushNotificationsEnabled(function(isEnabled) {

//       if (isEnabled) {
//           // The user is subscribed to notifications
//           // Don't show anything
//       } else {
//           document.getElementById("subscribe-link").addEventListener('click', subscribe);
//           document.getElementById("subscribe-link").style.display = '';
//       }
//   });
// });




function injectOfflineBanner() {

  let elem = document.createElement('div');

  elem.style.cssText = `
  position: fixed;
  background-color: #6d6d6d;
  bottom: 0;
  left: 0;
  right: 0;
  height: 46px;
  line-height: 40px;
  text-align: center;
  color: #FFF;
  z-index: 9999999999;
  `;

  elem.id = "offline-banner";

  elem.innerText = "Heads up  : You are offline";

  document.body.appendChild(elem);

}


function removeOfflineBanner() {

  const offlineBanner = document.querySelector("#offline-banner");

  if (offlineBanner !== null) offlineBanner.parentNode.removeChild(offlineBanner);

}



if (!navigator.onLine) injectOfflineBanner();

if (navigator.onLine) removeOfflineBanner();


addEventListener("offline", () => injectOfflineBanner());


addEventListener("online", () => removeOfflineBanner());



// Initialize Firebase
var config = {
  apiKey: "AIzaSyCV-Sq3qOIs8i11Tk_T6tmLhB-Umshj3Zw",
  authDomain: "a-pwa-demo.firebaseapp.com",
  databaseURL: "https://a-pwa-demo.firebaseio.com",
  projectId: "a-pwa-demo",
  storageBucket: "a-pwa-demo.appspot.com",
  messagingSenderId: "1037558452872"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();


const requestNotifications = async () => {

  await messaging.requestPermission();
  await messaging.getToken();

  console.log('Have permision')

  console.log(token);
};

messaging.onMessage((payload) => {

  console.log('OnMessage', payload);

})
