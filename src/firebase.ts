import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCl0qxiCy-VAZHX0592y8O8FPUcO_Vhcgs',
  authDomain: 'enterprise-management-ae10d.firebaseapp.com',
  projectId: 'enterprise-management-ae10d',
  storageBucket: 'enterprise-management-ae10d.appspot.com',
  messagingSenderId: '54692266025',
  appId: '1:54692266025:web:13595e56598b3912e15c38',
  measurementId: 'G-35PFYQYZZH',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
