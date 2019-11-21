import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.actions'

class App extends React.Component {
//  constructor() {
//    super()
//    this.state= {
//      currentUser: null
//    }
  //}

  // set unsebscribe to null
  unsubscribeFromAuth = null 
 
  componentDidMount() {
    const {setCurrentUser} = this.props;

    // if there is user authorization create user profile...
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth); 
      //set state to id and the data
      userRef.onSnapshot(snapShot => {
       setCurrentUser({
         currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }
       }) 
      });
    }

    //if there isn't user authorization set state
    setCurrentUser(userAuth);
    })
    
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

// setting the current user to user
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
