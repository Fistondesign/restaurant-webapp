import React from 'react';
import './App.css';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Restaurant from './components/restaurants'
import HowitWorks from './components/HowitWorks'
import Getapp from './components/Getapp';
import Search from './components/Search';
function Home() {
  return (

    <div className="App">
     <Search/>
     <Restaurant/>
     <HowitWorks/>
     <Getapp/>
    </div>
   
  );
}

export default Home;
