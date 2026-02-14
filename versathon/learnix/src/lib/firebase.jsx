import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl1D32k--LIeqdUWWlvXpzEOh94JmYuo0",
  authDomain: "learnix-quizapp.firebaseapp.com",
  projectId: "learnix-quizapp",
  storageBucket: "learnix-quizapp.firebasestorage.app",
  messagingSenderId: "224246292512",
  appId: "1:224246292512:web:8e49a47c14427c2a99dc45",
  measurementId: "G-K8L8T4KE4Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);