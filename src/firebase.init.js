// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyOmnpQ4SHaZ3_N161BmnZFy30zcupSig",
    authDomain: "ema-john-simple-6dab0.firebaseapp.com",
    projectId: "ema-john-simple-6dab0",
    storageBucket: "ema-john-simple-6dab0.appspot.com",
    messagingSenderId: "148718843353",
    appId: "1:148718843353:web:8bd6aa186b2bad858355c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;