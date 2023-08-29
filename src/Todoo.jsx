import React from "react";
import Todolist1 from "./Todolist1";
function Todoo(props){
    console.log('hkll')
    return(
        <div>
           <li className="mytodo">
                            {props.todo}
                            <button onClick={props.d}>Delete</button>
                            <button onClick={props.e}>Done</button>
                            <button>Undo</button>
                            </li>
        </div>
    )
}
export default React.memo(Todoo);