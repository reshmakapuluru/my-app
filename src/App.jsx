import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Todolist1 from './Todolist1';
import Todolist2 from './Todolist2';
import Tododone from './Tododone';
import Count from './Count';
import Colorlist from './Colorlist';



function App() {

  return (
    <div>
      
      <div className='mybox'>
      <Count></Count>
      <h1>Start StackBlizz!</h1>
      <div>Start editing to see some magic happen :)</div>
      <li className='myli'>Praveen</li>
      <li className='coffee'>Rakesh</li>
      <li className='myli'>Surya</li>
      <li className='tea'>Pavan</li>
      <li className='myli'>Vijay</li>
      </div>
      <Colorlist></Colorlist>
      
    </div>
  );
}

export default App;