import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Todolist1 from './Todolist1';
import Todolist2 from './Todolist2';
import Tododone from './Tododone';
import Count from './Count';


function App() {
  return (
    <div>
      {/* <Count></Count> */}
      <div className='mybox'>
        {/* <h1>Indian Teams</h1>

      <Todolist2 title='Mumbai Indians' players={['Rohit','Surya','kishan','bhumra','david']}></Todolist2>
      <Todolist2 title='Sunrises Hyderabad' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      <Todolist2 title='Chennai superkings' players={['Dhoni','raina','jadeja','warner','karan']}></Todolist2>
      <Todolist2 title='Royal Challengers Banglore' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      {/* <Todolist3> </Todolist3> */}
      {/*<Todolist1></Todolist1>
      <Tododone></Tododone> */}
      <Count></Count>
      <h1>Start StackBlizz!</h1>
      <div>Start editing to see some magic happen :)</div>
      <li className='myli'>Praveen</li>
      <li className='coffee'>Rakesh</li>
      <li className='myli'>Surya</li>
      <li className='tea'>Pavan</li>
      <li className='myli'>Vijay</li>
      </div>

      
    </div>
  );
}

export default App;