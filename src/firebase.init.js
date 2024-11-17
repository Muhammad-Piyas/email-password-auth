// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// DoNot Share config in public
const firebaseConfig = {
  apiKey: "AIzaSyC-RjQ4TWS20hUVpSmcio5bPMZ-TFIF3oQ",
  authDomain: "email-password-auth-ee30c.firebaseapp.com",
  projectId: "email-password-auth-ee30c",
  storageBucket: "email-password-auth-ee30c.firebasestorage.app",
  messagingSenderId: "697989730668",
  appId: "1:697989730668:web:e411baf4f646b4e26ca349",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
