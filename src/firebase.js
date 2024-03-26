import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCkGTDYQpK2moCx0HbYRo7SgO7nKA_LjsI",
  authDomain: "blossomdatabase.firebaseapp.com",
  projectId: "blossomdatabase",
  storageBucket: "blossomdatabase.appspot.com",
  messagingSenderId: "750699402529",
  appId: "1:750699402529:web:7d791b7294fb69ab275a60",
  databaseURL: "https://blossomdatabase-default-rtdb.firebaseio.com",
  measurementId: "G-RH8YQ26R8B"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
const db = getDatabase(firebaseApp);
export const storage = getStorage(firebaseApp);
export const auth = getAuth(firebaseApp);

export default db;