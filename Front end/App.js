import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
