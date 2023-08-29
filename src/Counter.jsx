import React from 'react';
function Counter(){
    var[count,setCount]=React.useState(0)
    function Inc(){
        setCount([count+10])
    }
    // function Dec(){
    //     setCount(count-props.i)
    // }
    return(
        <>
            <h1>Counter:{count}</h1>
            <button onClick={Inc()}>Increment</button>
            {/* <button onClick={Dec()}>Decrement</button> */}
        </>
    )
}
export default Counter;
