// adds a quantity value to our shop list 
// check to find when cart item current is equal to add
// only when they're equal add quantity value to the ones that are equal 
//otherwise just return all the card items
//  and if there are no matches cartitems id to next ones return all cartitems, 
//ones to add and set quantity to 1

//check if two ids are the same (one that exists and one that you'rea adding)
//if the two are the same then map out the oens that exist and any additional ones
// move into a quantity and add to that quantity = 
// otherwise if you don't just return the regular map how it is
//if cartitem id and the one you're adding doesn't exist - return 
// all the cartitems, all the cart items to add, and a quantity to 1) 
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


//remove cart item
//check to see if there is one inside to remove
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id 
    === cartItemToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter
        (cartItem => cartItem.id !== cartItemToRemove.id)        
}
return cartItems.map(
    cartItem => cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1} :
    cartItem
)
};