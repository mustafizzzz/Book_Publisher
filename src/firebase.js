import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAlANakiKRtOBW-Cw7zIRs0-lWdimA5JZo",
    authDomain: "bookpublisher-a42e8.firebaseapp.com",
    projectId: "bookpublisher-a42e8",
    storageBucket: "bookpublisher-a42e8.appspot.com",
    messagingSenderId: "271155471523",
    appId: "1:271155471523:web:c59aff7ddd0990d5818b16"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);