import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyABIWdQVdb-lEwza-63MIbZPduiCsNxX58",
  authDomain: "chitchat-bfdb1.firebaseapp.com",
  projectId: "chitchat-bfdb1",
  storageBucket: "chitchat-bfdb1.appspot.com",
  messagingSenderId: "326016380321",
  appId: "1:326016380321:web:2b02dd50bc6af900b52fe0"
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();