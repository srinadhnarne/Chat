import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAcf--shiOs97PspgKLsbWsZKqxvtXF5BU",
  authDomain: "chat-4ae04.firebaseapp.com",
  projectId: "chat-4ae04",
  storageBucket: "chat-4ae04.appspot.com",
  messagingSenderId: "791499712945",
  appId: "1:791499712945:web:3bc249211562e8d70b3590"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();