// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCbZxOtkRhLGSn6SN58eU6ChQ2idVIthY",
  authDomain: "grupo-vht.firebaseapp.com",
  projectId: "grupo-vht",
  storageBucket: "grupo-vht.appspot.com",
  messagingSenderId: "643079604185",
  appId: "1:643079604185:web:42dd016048587ae596bbc8",
  measurementId: "G-MP27DQVWHD"
};

export const firebaseImpl = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseImpl);