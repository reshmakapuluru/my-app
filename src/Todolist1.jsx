import React, { useCallback } from "react";
import Todo from './Todoo'

function Todolist1(props){
    //state
    var [todos,setTodos]=React.useState(['mango','apple','cat','banana','orange'])
    //logic
    function addtodo(){
        var x = document.getElementById('in').value
        setTodos([...todos,x])
       
    }
    var delTodo=React.useCallback(function(i){
            var temp = [...todos]
            temp.splice(i,1)
            setTodos([...temp])
            //alert(i)
        },[])
    
    //template
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" id="in"/>
            <button onClick={addtodo}>Add List</button>
            
            <ul>
                {
                    todos.map((todo,i)=>{
                        console.log('hello')
                        return <Todo todo={todo} i={i}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist1;
