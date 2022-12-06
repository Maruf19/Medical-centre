// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyAAhIiISLDc1geaeN6i48cxNVP7-Yvipd0",
  authDomain: "doctors-portal-6abcb.firebaseapp.com",
  projectId: "doctors-portal-6abcb",
  storageBucket: "doctors-portal-6abcb.appspot.com",
  messagingSenderId: "32951516424",
  appId: "1:32951516424:web:52d7384f39e0cdc30a00bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;