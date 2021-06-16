import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBr8Z0LnrTSYBl2IWDrO_014ZLqj_O5GXE",
  authDomain: "message-app-6c782.firebaseapp.com",
  projectId: "message-app-6c782",
  storageBucket: "message-app-6c782.appspot.com",
  messagingSenderId: "689594144606",
  appId: "1:689594144606:web:8ee45d217052eaf48aa1cf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
