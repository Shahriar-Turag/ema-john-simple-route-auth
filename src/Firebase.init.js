// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD42iYVxyRvnIw0duNRZXumzbLdtBY8lt4",
    authDomain: "ema-john-simple-32299.firebaseapp.com",
    projectId: "ema-john-simple-32299",
    storageBucket: "ema-john-simple-32299.appspot.com",
    messagingSenderId: "183158261255",
    appId: "1:183158261255:web:c16b7552a18db3bb144ca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
