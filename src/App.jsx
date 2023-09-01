import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

//import Products from './Products';
import Address from './Address';

function App() {
  var firstnameRef=React.useRef()
  var lastnameRef=React.useRef()
  var addressRef=React.useRef()
  useEffect(()=>{
    firstnameRef.current.focus()
  })
  function focuslastnameRef(e){
    if(e.key==='Enter'){
      lastnameRef.current.focus()
    }
  }
  function focusAddress(e){
    if(e.key==='Enter'){
      addressRef.current.focus()
    }
  }
  return (
    
    <div className='mybox'>
     <h1>Welcome to Edupoly ReactJS training</h1>
      
       {/* <Products></Products> */}
    
    <input type="text" ref={firstnameRef} onKeyUp={(ev)=>{focuslastnameRef(ev)}}></input>
    <br></br>
    <input type="text" ref={lastnameRef} onKeyUp={(ev)=>{focusAddress(ev)}}></input>
     
      <Address ref={addressRef}></Address>
    </div>
   
  );
}

export default App;