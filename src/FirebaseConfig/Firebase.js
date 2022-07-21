import firebase from "firebase"; 
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "catfish-e-commerce.firebaseapp.com",
  projectId: "catfish-e-commerce",
  storageBucket: "catfish-e-commerce.appspot.com",
  messagingSenderId: "115502660683",
  appId: "1:115502660683:web:60d47f2ebef30390ca21ce",
  measurementId: "G-8XQYMXE1WZ",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
