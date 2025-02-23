import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2hGE0b0dztCBeICqeV58RxoeK0wmcmNM",
  authDomain: "blog-app-b840c.firebaseapp.com",
  projectId: "blog-app-b840c",
  storageBucket: "blog-app-b840c.firebasestorage.app",
  messagingSenderId: "572604286541",
  appId: "1:572604286541:web:e8034d17fa081e2c8c3e04",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
