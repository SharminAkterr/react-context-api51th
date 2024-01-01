// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMSSLyMYw7nKByS5yev_37Q35DLJqE8q8",
    authDomain: "react-context-api51th.firebaseapp.com",
    projectId: "react-context-api51th",
    storageBucket: "react-context-api51th.appspot.com",
    messagingSenderId: "1092638120761",
    appId: "1:1092638120761:web:bc62eb8c70329bc6abe6e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;