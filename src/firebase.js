import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDChyXP1DGhulTZtE1F9QnSYJhsm59ViEw",
  authDomain: "crud-project-ec627.firebaseapp.com",
  projectId: "crud-project-ec627",
  storageBucket: "crud-project-ec627.firebasestorage.app",
  messagingSenderId: "736114098320",
  appId: "1:736114098320:web:d044a7d50f49184da09815",
  measurementId: "G-8Q2RTZGG6D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);