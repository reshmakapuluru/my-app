import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todolist from './Todolist';
import Todolist1 from './Todolist1';
import Todolist2 from './Todolist2';
import Tododone from './Tododone';

function App() {
  return (
    <div>
{/*      
      <Counter s={23} i={10}></Counter>
      <Counter s={100} i={5}></Counter> */}
      <div className='mybox'>
        <h1>Indian Teams</h1>

      <Todolist2 title='Mumbai Indians' players={['Rohit','Surya','kishan','bhumra','david']}></Todolist2>
      <Todolist2 title='Sunrises Hyderabad' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      <Todolist2 title='Chennai superkings' players={['Dhoni','raina','jadeja','warner','karan']}></Todolist2>
      <Todolist2 title='Royal Challengers Banglore' players={['williansom','manish','bhumvi','warner','karan']}></Todolist2>
      {/* <Todolist3> </Todolist3> */}
      <Todolist1></Todolist1>
      <Tododone></Tododone>
      </div>

      
    </div>
  );
}

export default App;