import {createSelector} from 'reselect';


const selectShop = state => state.shop;

const shopSelectorCollections= createSelector(
    [selectShop],
    shop => shop.collections    
);



export default shopSelectorCollections;

// createselector matching id and numbers with find
// curried function - a function that returns another function
export const selectCollection = collectionUrlParam =>
createSelector(
    [shopSelectorCollections],
    collections => collections[collectionUrlParam]
)
//data normalization 
 
export const selectCollectionsForPreview = createSelector(
    [shopSelectorCollections],
    collections => Object.keys(collections).map(
        key => collections[key]
    )
)
