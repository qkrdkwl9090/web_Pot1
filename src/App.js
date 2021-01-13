import Footer from './component/Footer.js';
import Menu from './component/Menu.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <>
      <Menu/>
      <Router>
        <Route exact path="/" component = {Home}/>
      </Router>      
      <Footer/>
    </>
  );
}

export default App;
