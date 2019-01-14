importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '534678906736' // troque pelo seu sender id 
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {

     console.log(payload.data.badgeCount);

     return self.registration.showNotification(title, options);
});
messaging.onMessage(function(payload) {

     console.log(payload.data.badgeCount);

});
