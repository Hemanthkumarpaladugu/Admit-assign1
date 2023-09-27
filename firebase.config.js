// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbDQ4PhSpDdAOJqvDJcBvAQsj89GqNiqg",
  authDomain: "admit-assign.firebaseapp.com",
  projectId: "admit-assign",
  storageBucket: "admit-assign.appspot.com",
  messagingSenderId: "1011026845665",
  appId: "1:1011026845665:web:4573a07e0d6e3b42bc3ca0",
  measurementId: "G-NY493LZ7XN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);





// Initialize Firebase
//const analytics = getAnalytics(app);