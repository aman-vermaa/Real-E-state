// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "haven-roost.firebaseapp.com",
  projectId: "haven-roost",
  storageBucket: "haven-roost.appspot.com",
  messagingSenderId: "836562232159",
  appId: "1:836562232159:web:9016be3ae1ac253eb58cea",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
