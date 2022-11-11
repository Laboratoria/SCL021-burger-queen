// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARgTBx8w-527Uv4bCdfY_hc0rHxR9hF3o",
  authDomain: "burgenqueen-1e67a.firebaseapp.com",
  projectId: "burgenqueen-1e67a",
  storageBucket: "burgenqueen-1e67a.appspot.com",
  messagingSenderId: "1070326655547",
  appId: "1:1070326655547:web:e3ad650714ed9b2fc5ca1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

