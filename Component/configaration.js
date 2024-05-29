// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD108fOFb6OOHwyYJsZf0D5n0SQ-7pP5Io",
  authDomain: "muviapp-48976.firebaseapp.com",
  projectId: "muviapp-48976",
  storageBucket: "muviapp-48976.appspot.com",
  messagingSenderId: "481708380635",
  appId: "1:481708380635:web:e5e80e225fc03ec00697fe",
  measurementId: "G-5F3D8F6SP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const FIREBASE_AUTH = getAuth(app)