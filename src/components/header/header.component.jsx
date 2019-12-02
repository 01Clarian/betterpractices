import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import selectCurrentUser from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import {signOutStart} from '../../redux/user/user.actions'

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/' >
        <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                REQUEST
            </OptionLink>
            <OptionLink to="/contact">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                // you can switch link to a div with as property
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
       {!hidden ? <CartDropDown /> : null}
    </HeaderContainer>
)

//current user is coming from the reducer 
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = (dispatch) => ({
    signOutStart: ()=> dispatch(signOutStart()),

})

export default connect(mapStateToProps, mapDispatchToProps)(Header); 