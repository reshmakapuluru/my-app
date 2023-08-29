import React from "react";
function Todolist2(props){
    console.log(props)
    
    var players=props.players
    var title=props.title


    return(
        <div className="mybox">
              <h1>{title}</h1>
              <ul>
                {
                    players.map((a)=>{
                      return <li>{a}</li>
                    })
                }
              </ul>
        </div>
    )
}
export default Todolist2;