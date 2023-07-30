import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJH-DSZ3H_PpsqmY9ki3sOVZ62cR_Bg7U",
  authDomain: "howtouse-422ac.firebaseapp.com",
  projectId: "howtouse-422ac",
  storageBucket: "howtouse-422ac.appspot.com",
  messagingSenderId: "688456755667",
  appId: "1:688456755667:web:525d032e45bc5428732726",
  measurementId: "G-0X5629NY39"
};

firebase.initializeApp(firebaseConfig);
// export const authService = firebase.auth();
export const dbService = firebase.firestore();