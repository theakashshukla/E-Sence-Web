// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn9SUTxUfEqUbPNd-gdG890093B6xDUac",
  authDomain: "mcu-esence.firebaseapp.com",
  projectId: "mcu-esence",
  storageBucket: "mcu-esence.appspot.com",
  messagingSenderId: "897477448641",
  appId: "1:897477448641:web:481875f88e0ee428a55540",
  measurementId: "G-PVYKXL1MTX"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


// const analytics = getAnalytics(app);