import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCkGTDYQpK2moCx0HbYRo7SgO7nKA_LjsI",
  authDomain: "blossomdatabase.firebaseapp.com",
  projectId: "blossomdatabase",
  storageBucket: "blossomdatabase.appspot.com",
  databaseURL: "https://blossomdatabase-default-rtdb.firebaseio.com",
  messagingSenderId: "750699402529",
  appId: "1:750699402529:web:7d791b7294fb69ab275a60",
  measurementId: "G-RH8YQ26R8B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);