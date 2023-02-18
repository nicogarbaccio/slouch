import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore';  
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZNeUZm5f6GcXik7ZTTxg0NWzTfOIestw",
  authDomain: "slouch-e6459.firebaseapp.com",
  projectId: "slouch-e6459",
  storageBucket: "slouch-e6459.appspot.com",
  messagingSenderId: "870670034626",
  appId: "1:870670034626:web:09612317ae52f05f4cbd5b",
  measurementId: "G-L234R1X8YQ"
};

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app); 
  const provider = new GoogleAuthProvider();  
  const auth = getAuth();
  
  export { db, provider, auth };