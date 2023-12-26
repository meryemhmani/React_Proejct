import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAUMAC5ALOZy6Yl1YKCMMHhPZvTqQDRpSE",
    authDomain: "projet-d075c.firebaseapp.com",
    projectId: "projet-d075c",
    storageBucket: "projet-d075c.appspot.com",
    messagingSenderId: "494361073951",
    appId: "1:494361073951:web:fc53ea255f1ce657c0f82a"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
