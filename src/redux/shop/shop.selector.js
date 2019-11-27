import {createSelector} from 'reselect';


const selectShop = state => state.shop;

const selectCollections= createSelector(
    [selectShop],
    shop => shop.collections    
);

// createselector matching id and numbers with find
// curried function - a function that returns another function
 
 const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(
        key => collections[key]
    )
)

export default selectCollectionsForPreview

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)
//data normalization 
