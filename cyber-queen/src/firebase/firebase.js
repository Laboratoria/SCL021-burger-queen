import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVXnpeVUZWdGRe8bYh2ajo1x3HwlP0Mq4",
  authDomain: "cyber-queen.firebaseapp.com",
  databaseURL: "https://cyber-queen-default-rtdb.firebaseio.com",
  projectId: "cyber-queen",
  storageBucket: "cyber-queen.appspot.com",
  messagingSenderId: "652617252411",
  appId: "1:652617252411:web:22d8f455bcb121ec36a61e",
  measurementId: "G-8L9SHKY182",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
