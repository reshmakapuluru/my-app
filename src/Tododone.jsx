import React from "react";
function Tododone(){
    var[todo,setTodo]=React.useState([
        {
            title:"get car",
            status:true
        },
        {
            title:"get BMW",
            status:false
        },
        {
            title:"Eat bajji",
            status:true
        },
    ])
    function qwe(ind){
        var temp=[...todo]
        temp[ind].status==true?(temp[ind].status=false):(temp[ind].status=true)
        setTodo([...temp])
    }
    return(
        <div>
            <ul>
                {
                    todo.map((a,index)=>{
                        return <li style={a.status===true?{backgroundColor:'green'}:{backgroundColor:'red'}}>{a.title}
                            <button onClick={()=>{qwe(index)}}>Done</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Tododone;