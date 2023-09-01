import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import Products from './Products';
import Cocktail from './Cocktail';

function App() {
 
  return (
    
    <div>
    
      
      {/* <Products></Products> */}
      <Cocktail></Cocktail>
    
    </div>
   
  );
}

export default App;