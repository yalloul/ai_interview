
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCighKblwWDTSbwMZwHom-hVHDhm4-DCf0",
  authDomain: "aiinterview-5be47.firebaseapp.com",
  projectId: "aiinterview-5be47",
  storageBucket: "aiinterview-5be47.firebasestorage.app",
  messagingSenderId: "81428893899",
  appId: "1:81428893899:web:94f37f3a3a729dfe624b4e",
  measurementId: "G-HLF7JXK6EB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);