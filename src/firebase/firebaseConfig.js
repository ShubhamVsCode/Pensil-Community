import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBipx0SA-49jg1nYqa08bYL84mT23-2z8U",
  authDomain: "pensil-backend.firebaseapp.com",
  databaseURL: "https://pensil-backend-default-rtdb.firebaseio.com",
  projectId: "pensil-backend",
  storageBucket: "pensil-backend.appspot.com",
  messagingSenderId: "369001088620",
  appId: "1:369001088620:web:29fb42c3fd656585b7ba49",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const storage = getStorage(app);
export const auth = getAuth(app);
