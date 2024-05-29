// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0G2P5MpXzyug0nRLvgqenh-eAG3q-438",
  authDomain: "bootcamp-f76f1.firebaseapp.com",
  projectId: "bootcamp-f76f1",
  storageBucket: "bootcamp-f76f1.appspot.com",
  messagingSenderId: "508800765858",
  appId: "1:508800765858:web:eb3e6daf673ea8480e2cfb",
  measurementId: "G-1XC39Q52QX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)