import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZL66OyX5_M51ldGKsfNXpwg_00_6KNTU",
    authDomain: "fb-clone-2-a21e2.firebaseapp.com",
    projectId: "fb-clone-2-a21e2",
    storageBucket: "fb-clone-2-a21e2.appspot.com",
    messagingSenderId: "393530117092",
    appId: "1:393530117092:web:c8644e721f2b8dc05955f1"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };