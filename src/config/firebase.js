import { initializeApp } from 'firebase/app';
// Initialize connection with Firebase authentication server:
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Initialize connection with Firebase database:
import { getFirestore } from 'firebase/firestore';

// Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyBhwUXVZoo5tZKtKeLjZPZ4ZwT5DnTTLlE",
  authDomain: "chitchat-e0865.firebaseapp.com",
  projectId: "chitchat-e0865",
  storageBucket: "chitchat-e0865.appspot.com",
  messagingSenderId: "449522574783",
  appId: "1:449522574783:web:4d153a504ef2ccef80ed0a"
};

// Initialize Firebase:
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);