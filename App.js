import React from 'react';
import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Restaurant from './components/restaurants'
import HowitWorks from './components/HowitWorks'
import Restodetail from './components/Restodetail'
import Home from './Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Searchresult from './components/Searchresult';

function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <div className="main">
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/restaurantlist"  component={Restaurant}/>
     <Route path="#Contact"  component={Contact}/>
     <Route path="/detail/:id" exact component={Restodetail}/>
     <Route path="/search/:input" exact component={Searchresult}/>
     </Switch>
     </div>
     <Contact/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
