import {takeLatest, call, all, put} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, covertCollectionsSnapShotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions'

export function* fetchCollectionAsync() {
    try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); // yield like async await
    const collectionsMap = yield call(covertCollectionsSnapShotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
        )
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)])
}
//saga is a generator function
//yield control of the sagas back to library
// yield pause until .next +> run concurrently


// saga is diff than thunk

// takeEvery listens, call is the effect that evokes the method
// call allows us to defer control back to yield
// adding more yields is good for testing

// put is the saga effect for creating actions just like dispatch