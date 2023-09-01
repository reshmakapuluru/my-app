import logo from './logo.svg';
import './App.css';
import React from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Reviews from './Reviews'
// import Accordion from './Accordion';
//import Products from './Products';
import First from './First';
import MyContext from './MyContext'
function App() {
  var[x,setX]=React.useState(120)
  return (
    <MyContext.Provider value={x}>
    <div className='mybox'>
      <h1>Welcome to Edupoly ReactJS training</h1>
      {/* <Accordion></Accordion> */}
      {/* <Reviews></Reviews> */}
      {/* <Products></Products> */}
      <h2>x::{x}</h2>
      <First x={x}></First>
     
      
    </div>
    </MyContext.Provider>
  );
}

export default App;