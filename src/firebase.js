import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmoDrDWqCTHTi60mUhcRw7lbw9I-YH-bU",
  authDomain: "facebook-clone-f0026.firebaseapp.com",
  projectId: "facebook-clone-f0026",
  storageBucket: "facebook-clone-f0026.appspot.com",
  messagingSenderId: "750723936576",
  appId: "1:750723936576:web:e70e73bea5c222005f4aa5",
  measurementId: "G-GW4QZ1RZRV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
