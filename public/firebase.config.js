// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwsTrzgtADlWEld68ScVRfP2oCqOpDK00",
  authDomain: "portfolio-10979.firebaseapp.com",
  projectId: "portfolio-10979",
  storageBucket: "portfolio-10979.appspot.com",
  messagingSenderId: "940748748149",
  appId: "1:940748748149:web:a413c55bb172d2826bcf3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)