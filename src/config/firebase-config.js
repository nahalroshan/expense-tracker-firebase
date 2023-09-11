// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjxM6FlHa4sQ9uOq28jx7gPhlbJDlycu4",
  authDomain: "expense-tracker-bbd10.firebaseapp.com",
  projectId: "expense-tracker-bbd10",
  storageBucket: "expense-tracker-bbd10.appspot.com",
  messagingSenderId: "1065729512340",
  appId: "1:1065729512340:web:77365da6a6d544b06e3581",
  measurementId: "G-YBYMBV9S6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)