import React from 'react';
import NavBar from './component/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './pages/Home';

import { auth } from './fireabaseConfig';
import account from './pages/Account';
import mail from './pages/Mail';
import login from './pages/Login';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
        <Router>        
              <Route path="/" exact={true} component={login}/>
              <NavBar/>
              <Route path="/home" component={home}/>
              <Route path="/account" component={account}/>
              <Route path="/mail" component={mail}/>
        </Router>      
      </>
    );
  }
}

export default App;