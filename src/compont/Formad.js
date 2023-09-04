import React, { useState } from 'react'
import "../style.css"
import shortid from 'shortid'

const Formad = (props) => {
    const  [text,setText] = useState("")

   const handelSubmit=(e)=>{
    e.preventDefault();

    props.onSubmit({
    id:shortid.generate() ,
    text:text,
    complete:false,
    })
    setText(""); /* من اجل افراغ مربع النص بعد الاضافة*/ 
    };

  return (
    <div className='contener'>
    <form onSubmit={handelSubmit}>

    <input className='input'
     type='text'
     placeholder='Enter Tode'
     value={text}
     onChange={(e)=>setText(e.target.value)}
      />

    <button className='btn'
    onClick={handelSubmit}
    
    >ADD Tode</button>
    </form>
    </div>
  )
}

export default Formad
