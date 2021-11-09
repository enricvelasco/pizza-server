const { initializeApp, app, apps } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyAM2xjsLlaq0cVh8L2gtvZB4CRAbJJ0e00",
  authDomain: "pizza-server-bbdd.firebaseapp.com",
  projectId: "pizza-server-bbdd",
  storageBucket: "pizza-server-bbdd.appspot.com",
  messagingSenderId: "61451363088",
  appId: "1:61451363088:web:baa8cd6d6c179d55c03b95",
  measurementId: "G-4EQ345363B"
};

const firebase = !apps.length ? initializeApp(firebaseConfig) : app();

module.exports = {
  firebase,
};
