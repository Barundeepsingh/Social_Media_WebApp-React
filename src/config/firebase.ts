// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk88qZH8vxYn3oiIpHAH8UBGdUa6sN5OM",
  authDomain: "react-project-162ed.firebaseapp.com",
  projectId: "react-project-162ed",
  storageBucket: "react-project-162ed.appspot.com",
  messagingSenderId: "421543667229",
  appId: "1:421543667229:web:25bed7b1e93e04cf9b88f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);