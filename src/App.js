import React, { useEffect, useState } from 'react'
import Formad from './compont/Formad'
import Todo from './compont/Todo'
import "./style.css"


/*
1- Read about navigation don't write any code on App file this is root file
2- we don't need ; remove it 
3- add some extions will help you ( live Server + PrettierCode)
4- always comment add above of line 
5- create some validation ( 
  1- can not add empty tode (show pop to user this is empty)
  2- user can't add email 
)
*/ 



const App = () => {
    let [todos,setTodo]=useState([])

    const addTodo =(todo)=>{
        setTodo([todo, ...todos])
    };

    /* function deleat todo */
    const handelDealet =(id)=>{
      // TODO => 
      // you did't remove the todo item you just filter ?? Fix this 
      // you need to remove the item from the list 
      
        setTodo(todos.filter((todo)=>todo.id !==id ))        
    }

    // add search component and use
    // const filtersSearch

useEffect(()=>{
  console.log('Hello test test ')
},[])
  
  return (
    <div className='app'>
      {/* onSubmit props in formad.js  */}
      <Formad onSubmit={addTodo}/>                             
      {
        todos.map((todo)=>(
          /*todo props in todo.js --onDeleat props in todo.js*/

            <Todo key={todo.id} todo={todo} onDeleat={()=> handelDealet(todo.id)}/> 

        ))
      }
    </div>
  );
};

export default App
