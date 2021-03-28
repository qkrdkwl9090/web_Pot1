import React from 'react';
import SideBar from './component/SideBar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
      
        <Router>      
           <Route exact path="/"  component={login}/>
           <SideBar/>
           <Route path="/home" component={home}/>
           <Route path="/account" component={account}/>
           <Route path="/mail" component={mail}/>
        </Router>      
      </>
    );
  }
}

export default App;