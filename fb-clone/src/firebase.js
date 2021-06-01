import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBSgWSNr8skWWe9Vao3g4n4PLsPqRQtibE",
  authDomain: "facebook-clone-4ee5e.firebaseapp.com",
  projectId: "facebook-clone-4ee5e",
  storageBucket: "facebook-clone-4ee5e.appspot.com",
  messagingSenderId: "683842673694",
  appId: "1:683842673694:web:8b96071acdb6a15726e20f",
  measurementId: "G-NXWQKXT5C0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;