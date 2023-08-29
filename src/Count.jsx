import React from 'react';
import Todolist1 from './Todolist1';
function Count(){
    var[c,setC] =React.useState(1)
    console.log('hi')
    function Inc(){
        console.log('first line rendered')
        setC([c*10])
    }
    return(
        <div className='mybox'>
            <h1>Counter</h1>
            <h1>{c}</h1>
            <button onClick={()=>{Inc()}}>Increment</button>
            <Todolist1></Todolist1>
        </div>
    
    )
}
export default React.memo(Count);