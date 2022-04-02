
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'

const firebaseConfig = {

  apiKey: "AIzaSyDR0S_kagIU2Qn2HCALGQgRVfChICSTeck",

  authDomain: "nerdy-soft-test.firebaseapp.com",

  databaseURL: "https://nerdy-soft-test-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "nerdy-soft-test",

  storageBucket: "nerdy-soft-test.appspot.com",

  messagingSenderId: "596830358927",

  appId: "1:596830358927:web:173c1cca64b89290228ffa"

};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)