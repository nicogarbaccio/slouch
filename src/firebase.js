import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore';  
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwlbJTYDK0fhD1fdp1YASf6ZE8NgMctKw",
    authDomain: "slouch-dd087.firebaseapp.com",
    projectId: "slouch-dd087",
    storageBucket: "slouch-dd087.appspot.com",
    messagingSenderId: "434718386256",
    appId: "1:434718386256:web:b6bc3799493eb24c07c955",
    measurementId: "G-YEHG022CE8"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app); 
  const provider = new GoogleAuthProvider();  
  const auth = getAuth();
  
  export { db, provider, auth };