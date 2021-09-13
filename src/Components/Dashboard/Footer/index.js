import React, { useState , useEffect } from 'react'
import './Footer.css'
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'

//tido list adding 
function Footer () {
    const initialState = JSON.parse(localStorage.getItem("todos"))|| [];
const[input ,setInput]=useState("");
const[todos ,setTodos]=useState(initialState);

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]);

  const onInputChange =(event) =>{
      setInput(event.target.value);
  }
  const addItem=(event)=>{
       event.preventDefault();
       
       setTodos([...todos,{ id:uuidv4(),title:input , completed:false}]);
       setInput("");
  }
        return (
            <div className="footer">
                
                <div className='form'>
                <TodoList todos={todos} setTodos={setTodos}/>
                    <form onSubmit={addItem}>
                        <input className='input'  placeholder='Travel Notes'
                         value={input} required onChange={onInputChange} />
                        <button className='add-button' type='submit' >+</button>
                    </form>
                   
                </div>
            </div>
        )
    }

export default Footer
