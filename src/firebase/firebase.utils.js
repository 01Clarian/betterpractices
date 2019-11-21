import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

// firebase configuration settings for api key and database etc
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

//execute firebase initialization
firebase.initializeApp(config);

// create a new user two parameters - userAuth -
export const createUserProfileDocument = async (userAuth, additionalData) => {
if(!userAuth) return;
//if we have user authorization
// get user id from firestore doc set to userRef
const userRef = firestore.doc(`users/${userAuth.uid}`);

// get the user reference and snapshot it
const snapShot = await userRef.get();

console.log(snapShot)
// if the snapshot identification doesn't exist, create it :
if(!snapShot.exists) {
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
    //create new ref
    await userRef.set(
      {
        displayName,
        email,
        createdAt,
        ...additionalData
      }
    )
  } catch (error) {
    console.log('error creating user', error.message)
  }
}
// if a snapshot does exist just return the user ref 
return userRef;
}
//hook up authorization and the firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//firestore.collection('users').doc('ejzPpPDX53z6AGQKjGa').collection('cartItems').doc('R3bt5KE64OhaV3ZxZFqI')
//firestore.doc('/users/ejzPpPDX53z6AGQKjGa/cartItems/R3bt5KE64OhaV3ZxZFqI')
 
//set up google authorization signin and send to custom button
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
// hook up variable signinwithgoogle to signing in popup from provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;