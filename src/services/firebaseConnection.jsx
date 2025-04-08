import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
//import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD5-UZ3m_MRo2G70VPKFXvSecrynBzp7kU",
    authDomain: "tickets-d94aa.firebaseapp.com",
    projectId: "tickets-d94aa",
    storageBucket: "tickets-d94aa.firebasestorage.app",
    messagingSenderId: "513955698666",
    appId: "1:513955698666:web:f357221c801681a8cc0493",
    measurementId: "G-BWNWQ9V5Q5"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)

  const db = getFirestore(firebaseApp)

  //const storage = getStorage(firebaseApp)

  export {auth, db} // e ', storage, se fosse o caso