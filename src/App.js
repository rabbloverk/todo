import React, { useState } from 'react'
import Formad from './compont/Formad'
import Todo from './compont/Todo'
import "./style.css"

const App = () => {
    let [todos,setTodo]=useState([]);
    const addTodo =(todo)=>{
        setTodo([todo, ...todos]);
    };
    const handelDealet =(id)=>{
        setTodo(todos.filter((todo)=>todo.id!==id))         /* function deleat todo */
    }
  return (
    <div className='app'>
      <Formad onSubmit={addTodo}/>                             {/* onSubmit props in formad.js  */}

      {
        todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} onDeleat={()=> handelDealet(todo.id)}/> /*todo props in todo.js --onDeleat props in todo.js*/

        ))
      }
    </div>
  );
};

export default App
