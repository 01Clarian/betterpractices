import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepages/homepage.component';

const ArtistsPage = () => (
  <div>
    <h1>ARTISTS PAGE</h1>
  </div>
);
function App() {
  return (
    <div className="App">
        <div>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Artists" component={ArtistsPage}
          />
          </Switch>
        </div>
    </div>
  );
}

export default App;
