// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZDJuHlfolPRDitzS5BBCp62a65fqGTZ4",
    authDomain: "react-intern-jobtask.firebaseapp.com",
    projectId: "react-intern-jobtask",
    storageBucket: "react-intern-jobtask.appspot.com",
    messagingSenderId: "360955392826",
    appId: "1:360955392826:web:8af844f3f1748129159603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;