import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWATduF_39PQVoMQqm4_EW3-JNxAPSZTc",
  authDomain: "rv-rioflorido.firebaseapp.com",
  projectId: "rv-rioflorido",
  storageBucket: "rv-rioflorido.firebasestorage.app",
  messagingSenderId: "535202586131",
  appId: "1:535202586131:web:14b333af1f683a2d74a9e6",
  measurementId: "G-R6JZ48P4V8"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
export { auth, GoogleAuthProvider, signInWithPopup };