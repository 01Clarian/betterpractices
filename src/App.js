import React,{useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import selectCurrentUser from './redux/user/user.selector';

import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './redux/user/user.actions'

import './App.css';


const App = ({checkUserSession, currentUser}) => {
 
  useEffect(()=>{
    checkUserSession()
  }, [checkUserSession])
  
  //unsubscribeFromAuth = null 

    // sigout unsubscribe auto when lifecycle changes
  //componentWillUnmount() {
  //  this.unsubscribeFromAuth();
 // }
  
 return (
    <div className="App">
        <div>
          <Header  />
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path='/signin' 
          render={()=> 
          currentUser ? (
          <Redirect to='/' /> ) : (<SignInAndSignUpPage />
            )
          }  
          />
          </Switch>
        </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

// setting the current user to user


export default connect(mapStateToProps, mapDispatchToProps)(App);
