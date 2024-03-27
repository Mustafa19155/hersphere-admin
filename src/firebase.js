import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADK8tMUS3OgDnlFnNagX54bV2MRAtDdkY",
  authDomain: "reexampro.firebaseapp.com",
  projectId: "reexampro",
  storageBucket: "reexampro.appspot.com",
  messagingSenderId: "516388432046",
  appId: "1:516388432046:web:1eeb32db32c92380bb253f",
  measurementId: "G-5HH3X7ELQ7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, auth };
