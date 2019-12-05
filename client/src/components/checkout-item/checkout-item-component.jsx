import React from 'react';
import {connect} from 'react-redux';
import addItem,{clearItemFromCart, removeItem} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, dispatch}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    return (

<div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div onClick={()=>dispatch(removeItem(cartItem))} className='arrow'>&#10094;</div>
          <span className='value'> {quantity}</span>           
           <div onClick={()=>dispatch(addItem(cartItem))} className='arrow'>&#10095;</div>            
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>dispatch(clearItemFromCart(cartItem))}>
         &#10005;    
        </div> 
    </div>
    )}

export default connect(null,)(CheckoutItem)
