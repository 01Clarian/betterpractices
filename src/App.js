import React from 'react';
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


class App extends React.Component {
  unsubscribeFromAuth = null 
 
  componentDidMount() {
    const {checkUserSession} = this.props
    checkUserSession()
    // if there is user authorization create user profile...
  //  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  ///  if(userAuth) {
   ///   const userRef = await createUserProfileDocument(userAuth)
      //set state to id and the data
   //   userRef.onSnapshot(snapShot => {
   //    setCurrentUser({
    //     currentUser: {
     //      id: snapShot.id,
      //     ...snapShot.data()
     //    }
     //  }) 
    //  });
    //}

    //if there isn't user authorization set state
  //  setCurrentUser(userAuth);
  //  })
    
  }
    // sigout unsubscribe auto when lifecycle changes
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
render(){  return (
    <div className="App">
        <div>
          <Header  />
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route exact path='/signin' 
          render={()=> 
          this.props.currentUser ? (
          <Redirect to='/' /> ) : (<SignInAndSignUpPage />
            )
          }  
          />
          </Switch>
        </div>
    </div>
  );
}}

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

// setting the current user to user


export default connect(mapStateToProps, mapDispatchToProps)(App);
