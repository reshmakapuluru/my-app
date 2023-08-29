import React from 'react';
function Counter(props){
    var[count,setCount]=React.useState(props.s)
    function Inc(){
        setCount(count+props.i)
    }
    function Dec(){
        setCount(count-props.i)
    }
    return(
        <>
            <h1>Counter:{count}</h1>
            <button onClick={Inc()}>Increment</button>
            <button onClick={Dec()}>Decrement</button>
        </>
    )
}
export default Counter;
