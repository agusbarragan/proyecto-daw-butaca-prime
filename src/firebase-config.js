import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
//import { getFirestore } from "firebase/firestore";

//Config del firabase
const firebaseConfig = {
  apiKey: "AIzaSyDaTItMFVd2pTulaZ9Gb9ccMLs5wrjyWQo",
  authDomain: "fir-proyectodaw.firebaseapp.com",
  projectId: "fir-proyectodaw",
  storageBucket: "fir-proyectodaw.appspot.com",
  messagingSenderId: "1000928078238",
  appId: "1:1000928078238:web:76ea7c4cdb091ed0ce8e8f",
  measurementId: "G-8RBPHKXWH2"
};


//Arranca la app
const firebaseApp = initializeApp(firebaseConfig);

//const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
getDatabase(firebaseApp);

export default firebaseApp;