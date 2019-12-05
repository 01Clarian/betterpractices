import {createSelector} from 'reselect';


const selectShop = state => state.shop

const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

// createselector matching id and numbers with find
// curried function - a function that returns another function
 
 const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collections => collections ? Object.keys(collections).map(
        key => collections[key]
    ) : []
)
export default selectCollectionsForPreview

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam]
    : null) 
//data normalization 

export const selectCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectedLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
    // converting to boolean without changing the sign = !!
    //we make it false - and then in the shop component set it to true with!
    //calling a double bang turns any value !! to false
    // object!!{} = will get true
)