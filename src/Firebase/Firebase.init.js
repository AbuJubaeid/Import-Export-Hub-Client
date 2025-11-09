// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0eiEzykCtWk_2Mj-rwJoRq268sFMH6OY",
  authDomain: "import-export-hub-ab4b1.firebaseapp.com",
  projectId: "import-export-hub-ab4b1",
  storageBucket: "import-export-hub-ab4b1.firebasestorage.app",
  messagingSenderId: "850555997335",
  appId: "1:850555997335:web:b2602d093ba94186feadd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);