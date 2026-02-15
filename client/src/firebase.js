import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASVKS8Gh4ij33wpUF9eRI42WLGdsQHfFQ",
  authDomain: "first-eec82.firebaseapp.com",
  projectId: "first-eec82",
  storageBucket: "first-eec82.firebasestorage.app",
  messagingSenderId: "122414253770",
  appId: "1:122414253770:web:aa6b544345b2c547c79633",
  measurementId: "G-TZBZ940BDJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
