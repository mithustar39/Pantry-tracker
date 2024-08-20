// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD_7foTbqk-aBgB1KVpDe2e1mEMWfDex48",
    authDomain: "pantry-tracker-a264d.firebaseapp.com",
    projectId: "pantry-tracker-a264d",
    storageBucket: "pantry-tracker-a264d.appspot.com",
    messagingSenderId: "39165414108",
    appId: "1:39165414108:web:c080ac4402698d06ee4219",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
