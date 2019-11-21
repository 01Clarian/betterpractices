// adds a quantity value to our shop list 
// check to find when cart item current is equal to add
// only when they're equal add quantity value to the ones that are equal 
//otherwise just return all the card items
//  and if there are no matches cartitems id to next ones return all cartitems, 
//ones to add and set quantity to 1

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id 
    === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id? {
                ...cartItem, quantity: cartItem.quantity + 1
            }
            : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};