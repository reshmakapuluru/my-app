import logo from './logo.svg';
import './App.css';

import Colorlist from './Colorlist';
import Child from './Child';
import React from 'react';
import Sorting from './Sorting';
import axios from 'axios';
import Reviews from './Reviews'

function App() {
  var [x,setX]=React.useState(100)
  function inc(){
    setX([x+1])
  }
  var ar=React.useMemo(()=>[12,23],[]);
  return (
    <div>
      <div className='mybox'>
        {/* <Colorlist></Colorlist> */}
        <div>{ar}</div>
        <child></child>
        <button onClick={()=>{inc()}}>Increment:{x}</button>
      </div>
      {/* <Sorting></Sorting> */}
      <Reviews></Reviews>
      
    </div>
  );
}

export default App;