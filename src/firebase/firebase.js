// Import the necessary Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjvqfoUBavx8U0NAkB5NytT83n_55PEjA",
  authDomain: "customer2customer-609cd.firebaseapp.com",
  projectId: "customer2customer-609cd",
  storageBucket: "customer2customer-609cd.appspot.com",
  messagingSenderId: "628694938601",
  appId: "1:628694938601:web:a67663cf83a61024b99178",
  measurementId: "G-RBZX6W2X2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore, Authentication, and Storage instances for use in other modules
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
