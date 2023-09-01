import React from "react";
import Second from "./Second";
function First(props){
    return(
        <div className="mybox">
            <h1>First</h1>
            <h1>x::{props.x}</h1>
            <Second></Second>
        </div>
    )
}
export default First;