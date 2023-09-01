import React,{forwardRef} from "react";
var Address=React.forwardRef((props,ref1)=>{    
    return(
        <div className="mybox">
            <h1>Address</h1>
            <input type="text" ref={ref1}></input>
        </div>
    )
})
export default Address;