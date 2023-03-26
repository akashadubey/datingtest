import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDzgSSnMM4z40gKBbEV_nHQ8h02Sj_rvOo",
  authDomain: "datingtest-b1fac.firebaseapp.com",
  projectId: "datingtest-b1fac",
  storageBucket: "datingtest-b1fac.appspot.com",
  messagingSenderId: "1047252158750",
  appId: "1:1047252158750:web:3073c586d3a81d8820210f",
  measurementId: "G-0ERL711QH2"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();