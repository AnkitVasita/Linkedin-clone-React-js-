import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbjbENOAomsKjVmJ_mZBxPTC5Mgezq-so",
  authDomain: "linkedin-clone-5ea42.firebaseapp.com",
  projectId: "linkedin-clone-5ea42",
  storageBucket: "linkedin-clone-5ea42.appspot.com",
  messagingSenderId: "582403166421",
  appId: "1:582403166421:web:1cffc95ef8eb6674e1125c",
  measurementId: "G-09HJ5J96CQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
