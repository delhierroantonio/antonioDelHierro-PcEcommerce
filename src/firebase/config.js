import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCaewF_d6eQc-H3vuwXKYL_ct-5iuYdq4w",
  authDomain: "ecommerce-react-coderhou-c1759.firebaseapp.com",
  projectId: "ecommerce-react-coderhou-c1759",
  storageBucket: "ecommerce-react-coderhou-c1759.appspot.com",
  messagingSenderId: "116415658713",
  appId: "1:116415658713:web:c2ed0c2b4055c9cc705cc8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);