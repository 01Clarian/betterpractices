import ShopActionsTypes from './shop.types'
import {firestore, covertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'
// thunk an action creator that returns a function that
//gets the dispatch 

export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage  
})

// the actions which send up to the various channels ^
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapShot => {
            const collectionsMap =  covertCollectionsSnapShotToMap(snapShot)
               dispatch(fetchCollectionsSuccess(collectionsMap))
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}

//dispatch - thunk: function that returns a function that does an action