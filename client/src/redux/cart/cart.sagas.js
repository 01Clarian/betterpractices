import {takeLatest, all, call, put} from 'redux-saga/effects';
import {clearCart} from './cart.actions'
import UserActionTypes from '../user/user.types';


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* clearCartOnSignOut() {
    yield put(clearCart())
} 

export function* cartSagas() {
    yield all([call(onSignOutSuccess)])
}