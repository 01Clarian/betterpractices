import {takeLatest, put, all, call} from 'redux-saga/effects'

import UserActionTypes from './user.types';

import {auth, googleProvider, createUserProfileDocument,
getCurrentUser} from '../../firebase/firebase.utils';

import {SignInSuccess, SignInFailure, signOutSuccess, signOutFailure,
signUpSuccess, signUpFailure} from './user.actions'

// getting in sign in from firebase
export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
        const userSnapshot = yield userRef.get();
        yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }   catch(error) {
        yield put(SignInFailure(error))
    } 
}

// sign in with google
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signUpFailure(error))
    }
}


export function* signInWithEmail({payload: {email, password}}) {
    try {
        // destructuring create user from auth.signIn
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotFromUserAuth(user)
    } catch(error) {
            put(SignInFailure(error))
    }
}

// check if user is authenticated
export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth)
    } catch(error) {
        yield put(SignInFailure(error));
    }
}

// sign the user out
export function*  signOut() {
try {
    yield auth.signOut()
    yield put(signOutSuccess())
} catch(error) {
    put(signOutFailure(error))
}
}

export function* signUpUser({payload: {email, password, displayName}}) { 
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(
            email, 
            password
    );
      yield put(signUpSuccess({user, additionalData: {displayName}}));
      } catch(error) {
          yield put(signUpFailure(error))
      }
  }

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,
        signInAfterSignUp)
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapShotFromUserAuth(user, additionalData)
}


export function* userSagas() {
    yield all([call(onGoogleSignInStart),
               call(onEmailSignInStart), 
                call(isUserAuthenticated),
                call(onSignOutStart),
                call(onSignUpStart),
            call(onSignUpSuccess)])
} 