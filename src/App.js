import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super()
    this.state= {
      currentUser: null
    }
  }
  // set unsebscribe to null
  unsubscribeFromAuth = null 
 
  componentDidMount() {
    // if there is user authorization create user profile...
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth); 
      //set state to id and the data
      userRef.onSnapshot(snapShot => {
       this.setState({
         currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }

       }) 
       console.log(this.state)
      });
    }
    //if there isn't user authorization set state
    this.setState({currentUser: userAuth});
    })
    
  }
    // sigout unsubscribe auto when lifecycle changes
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
render(){  return (
    <div className="App">
        <div>
          <Header currentUser={this.state.currentUser} />
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </div>
    </div>
  );
}}


export default App;
