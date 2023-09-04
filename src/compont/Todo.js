import React from 'react'

const Todo = (props) => {

  return (
    <div className='todolist'>
    <div className='text'>{props.todo.text}</div>
    <button className='deleat' onClick={props.onDeleat}>x</button>
    </div>
  )
}

export default Todo
