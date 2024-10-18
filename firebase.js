import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAocbQjdGSkrM02VZgNOZxeELMnosabmsM",
  authDomain: "mapp-fn.firebaseapp.com",
  projectId: "mapp-fn",
  storageBucket: "mapp-fn.appspot.com",
  messagingSenderId: "933586749255",
  appId: "1:933586749255:web:35d9c0c609a3e950872e62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore(app);