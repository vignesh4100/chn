import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCgo5N3LbetF3MCjg6wZbHsxCAmahvjfz4",
  authDomain: "chn-technologies.firebaseapp.com",
  projectId: "chn-technologies",
  storageBucket: "chn-technologies.firebasestorage.app",
  messagingSenderId: "353867087642",
  appId: "G-94L1LRKQQQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;