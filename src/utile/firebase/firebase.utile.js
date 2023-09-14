import {initializeApp} from 'firebase/app';

import { 
    getAuth , 
    signInWithRedirect , 
    signInWithPopup , 
    GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCeZTm7kGixYe7j2l3ml-yIDLQV0eQM4Rg",
    authDomain: "crwn-clothing-db-7c024initializeApp.firebaseapp.com",
    projectId: "crwn-clothing-db-7c024",
    storageBucket: "crwn-clothing-db-7c024.appspot.com",
    messagingSenderId: "877056668897",
    appId: "1:877056668897:web:ca8687c9d15f37569333a0"
  };
  
  // Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
// sssss
const provide = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});

export const auth = getAuth();
export const SignInWithGooglePopup =()=> signInWithPopup(auth,provide);

