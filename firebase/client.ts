import { initializeApp ,getApps,getApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9rhz3jF1pAcHqaN2Lb6em_ndLx_6l-mA",
  authDomain: "prepwise-eece2.firebaseapp.com",
  projectId: "prepwise-eece2",
  storageBucket: "prepwise-eece2.firebasestorage.app",
  messagingSenderId: "558299685478",
  appId: "1:558299685478:web:6e71988688f5f60d9a83a7",
  measurementId: "G-2M0FHELYMX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
