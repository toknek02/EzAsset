// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAEh6RF4bqUgny572FNDJJGomG6A8C_teY",
  authDomain: "azasset-b4671.firebaseapp.com",
  projectId: "azasset-b4671",
  storageBucket: "azasset-b4671.firebasestorage.app",
  messagingSenderId: "235517726258",
  appId: "1:235517726258:web:a813c21b29f9f9a5c7362b",
  measurementId: "G-33PYSX29ZS"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
