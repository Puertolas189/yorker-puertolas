// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAK2lFUZpT7IcsC7AEcwTsS5TrK3pm_u8",
  authDomain: "yorker-68c59.firebaseapp.com",
  projectId: "yorker-68c59",
  storageBucket: "yorker-68c59.appspot.com",
  messagingSenderId: "323283871097",
  appId: "1:323283871097:web:f0020067f54b004a43fba8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db