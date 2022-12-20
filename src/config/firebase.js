import { initializeApp } from 'firebase/app';
// Initialize connection with Firebase authentication server:
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Initialize connection with Firebase database:
import { getFirestore } from 'firebase/firestore';

// Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyD1USUPagQmeRex-xz5teASRHWSAKjKO2I",
  authDomain: "chitchat-44b1f.firebaseapp.com",
  projectId: "chitchat-44b1f",
  storageBucket: "chitchat-44b1f.appspot.com",
  messagingSenderId: "852475099499",
  appId: "1:852475099499:web:ab635f1bb4c4cd21e2b42e"
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);