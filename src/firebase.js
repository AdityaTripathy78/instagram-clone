import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDP5CLkwhdC5axr9x78vDMVhL3lErw8ZKo",
    authDomain: "instagram-clone-846f7.firebaseapp.com",
    databaseURL: "https://instagram-clone-846f7.web.app",
    projectId: "instagram-clone-846f7",
    storageBucket: "instagram-clone-846f7.appspot.com",
    messagingSenderId: "481600320667",
    appId: "1:481600320667:web:cc54fd208f264dec4a823e",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
