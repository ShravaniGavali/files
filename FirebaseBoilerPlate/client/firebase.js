// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtj8LrQIEnYrgViW-6NjLxFLfxhZewvn8",
  authDomain: "todo-test-b966e.firebaseapp.com",
  projectId: "todo-test-b966e",
  storageBucket: "todo-test-b966e.appspot.com",
  messagingSenderId: "442317597392",
  appId: "1:442317597392:web:0174e3a1947b365983ccd5",
  measurementId: "G-FHG5MVZR3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


 export const db = getFirestore(app);