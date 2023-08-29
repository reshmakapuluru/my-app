import React from 'react'
function Todolist(){
    var[todos,setTodos]=React.useState(['get bike','get new car','get BMW'])
    return(
        <>
            <h1>Todolist</h1>
            <ul>
                {
                    todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            </ul>
        </>
    )
}
export default Todolist;