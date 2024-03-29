import React from 'react'
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import './cart-dropdown.styles.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {

    return (
    <div className ='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id}
                    item={cartItem} />)
            :
            <span className="empty-message">You currently have no level up requests.</span>    }
            <CustomButton onClick={()=>{history.push('/checkout');
            dispatch(toggleCartHidden())}}>GO TO CHECKOUT</CustomButton>  
        </div>
    </div>
    )}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));