import Footer from './component/Footer.js';
import Header from './component/Header.js';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Route exact path="/" component = {Home}/>
      </Router>      
      <Footer/>
    </>
  );
}

export default App;
