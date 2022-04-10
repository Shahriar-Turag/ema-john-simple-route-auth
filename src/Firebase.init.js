// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzP9MpsZid4cCK4EIwmZBXRjz78ftuclE",
    authDomain: "ema-john-simple-d0256.firebaseapp.com",
    projectId: "ema-john-simple-d0256",
    storageBucket: "ema-john-simple-d0256.appspot.com",
    messagingSenderId: "602368587326",
    appId: "1:602368587326:web:931f08e7a193c410e0836f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
