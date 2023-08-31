import logo from './logo.svg';
import './App.css';

import Sorting from './Sorting';
import axios from 'axios';
import First from './First';
import Second from './Second';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.css';
import Reviews from './Reviews'

function App() {
  
  return (
    <div>
      <div className='mybox'>
          {/* <First></First> */}
          {/* <Second></Second> */}
          <Project></Project>
      </div>
      {/* <Sorting></Sorting> */}
      <Reviews></Reviews>
     
      
    </div>
  );
}

export default App;