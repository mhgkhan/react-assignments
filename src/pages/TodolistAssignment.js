import React, { useState } from 'react'

const TodolistAssignment = () => {

  const [todos,setTodos]  = useState([])
  const [input,setInput] = useState("")

  const addTodo= (e)=>{
    e.preventDefault()
    setTodos([...todos,input]);
    setInput("")
  }

  const delTodo = (ind) =>{
    const prevTodos = todos
    prevTodos.splice(ind,1);
    setTodos([...todos]);
    console.log(todos)
  }

  
  const editTodo = (ind)=>{
    const prevTodo = todos
    const edit = prompt(prevTodo[ind],prevTodo[ind])
    if(!edit || edit == null || edit === undefined || edit.length<2){}
    else
    {
      prevTodo[ind] = edit
    }
    setTodos([...prevTodo])
  }


  return (
    <div>
        <h1>TODO LIST</h1>
       <div className="todolist">
          <form onSubmit={addTodo}>
            <div className="inputs">
              <input type="text" placeholder='Enter item' onChange={(e)=>setInput(e.target.value)} value={input} />
              <button type='submit' disabled={input.length<2}>ADD NOW </button>
            </div>
          </form>

          <div className="todoscontainer">
          <h2>Todo items </h2>

            <div className="todos">
             {
              todos.map((todo,index
                )=>{
                return  <div className="todo"> <span>{index+1}</span>
                <p>{todo}</p>
                <button onClick={()=>editTodo(index)}>📝</button>
                <button onClick={()=>delTodo(index)}>🗑️</button>
              </div>
              })
             }
            </div>
          </div>
       </div>
    </div>
  )
}

export default TodolistAssignment