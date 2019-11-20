import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyDLpWawnIMPizggh0z3jif5MkdqYuN8aEU",
    authDomain: "bp-db-7fbdb.firebaseapp.com",
    databaseURL: "https://bp-db-7fbdb.firebaseio.com",
    projectId: "bp-db-7fbdb",
    storageBucket: "bp-db-7fbdb.appspot.com",
    messagingSenderId: "184900964701",
    appId: "1:184900964701:web:018df24b08d3f7d7f518b4",
    measurementId: "G-MPDYKY5EX6"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;