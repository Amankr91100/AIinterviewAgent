
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-a3516.firebaseapp.com",
  projectId: "interviewiq-a3516",
  storageBucket: "interviewiq-a3516.firebasestorage.app",
  messagingSenderId: "314701935538",
  appId: "1:314701935538:web:6b9a4788c23af9b166aaab"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}