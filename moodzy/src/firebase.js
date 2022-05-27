import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDQ32bUrj-Zj1rP8lE-hIX4fEsFwpJCoZQ",
    authDomain: "moodzy-ott.firebaseapp.com",
    projectId: "moodzy-ott",
    storageBucket: "moodzy-ott.appspot.com",
    messagingSenderId: "65257108482",
    appId: "1:65257108482:web:a46d04d80ea07c6e74e31b",
    measurementId: "G-1CZT2FFNT1"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage();

const handleAuth = ()=>{
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        alert(error.message);
    })
}


export {auth, provider, storage,handleAuth};
export default db;