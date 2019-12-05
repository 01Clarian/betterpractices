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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  //const collectionRef = firestore.collection('users');
  
  const snapShot =  await userRef.get()
  //const collectionSnapShop = await collectionRef.get()
  ///console.log({collection: collectionSnapShop.docs.map(doc => doc.data())})

  if(!snapShot.exists) {
  const {displayName, email} = userAuth
  const createdAt = new Date()
  try {
    await userRef.set({
      displayName,
      createdAt,
      email,
      ...additionalData
    })
  } catch (error) {
    console.error(error)
  }
  }
  return userRef 
}

// making a new collections
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  console.log(collectionRef)
// firing batch
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
    console.log(newDocRef);
  });

  return await batch.commit()

}
// get snapshot object and convert
export const covertCollectionsSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => 
    { const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }}
    )
    return transformedCollection.reduce((accum, collection) => {
      accum[collection.title.toLowerCase()] = collection;
      return accum;
    }, {})
}

// on auth onAuthStateChanged succeed or reject promise
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth)}, reject)
  });
}

//hook up authorization and the firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();
//firestore.collection('users').doc('ejzPpPDX53z6AGQKjGa').collection('cartItems').doc('R3bt5KE64OhaV3ZxZFqI')
//firestore.doc('/users/ejzPpPDX53z6AGQKjGa/cartItems/R3bt5KE64OhaV3ZxZFqI')
 
//set up google authorization signin and send to custom button
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
// hook up variable signinwithgoogle to signing in popup from provider
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;