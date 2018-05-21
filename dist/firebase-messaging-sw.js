importScripts("https://www.gstatic.com/firebasejs/5.0.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/5.0.1/firebase-messaging.js")


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


  // If we want to overide the message that we receive from the push 
  messaging.setBackgroundMessageHandler( (payload) =>{  

    const title = "Hello workshop !";

    const options = {
        body : payload.data.status
    }

    return self.registration.showNotification(title,options);

  });



  