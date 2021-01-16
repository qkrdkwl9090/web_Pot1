import Footer from './component/Footer.js';
import NavBar from './component/NavBar.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import home from './pages/Home';
import account from './pages/Account';
import mail from './pages/Mail';
function App() {
  return (
    <>
      <Router>
        
            <NavBar/>
            <Route path="/" exact={true} component={home}/>
            <Route path="/account" component={account}/>
            <Route path="/mail" component={mail}/>
      </Router>      
      <Footer/>
    </>
  );
}

export default App;
