// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdT4LdvXgnmiEtmeqR_qCMaBETjsBCm-Q",
  authDomain: "portfolio-990c3.firebaseapp.com",
  projectId: "portfolio-990c3",
  storageBucket: "portfolio-990c3.firebasestorage.app",
  messagingSenderId: "849583440390",
  appId: "1:849583440390:web:b08d2709425a8ba6d4f987",
  measurementId: "G-GCZDSYRF8N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
