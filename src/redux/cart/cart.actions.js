import cartActionTypes from './cart.types';
import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
});

const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
}); 

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
}); 

export default addItem 