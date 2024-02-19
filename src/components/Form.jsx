import React from 'react'
import { useState } from 'react';
import styles from './form.module.css';

const Forms=({todos,setTodos})=> {
    // const [todo,setTodo] = useState("");
    const [todo,setTodo] = useState({name:"",done:false})


    const handleSubmit = (event) =>{
        event.preventDefault(); // for preventing it's default method of reloadiing on submission
        setTodos([...todos,todo]); // "...todos" for keeping previous items & "todo" for keeping current item
        setTodo({name:"",done:false}); //for making the input field empyty after adding an item
    }


  return (
    <div>
       
      <form  
      className={styles.todoform}
      onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
        <input
        className={styles.modernInput} 
        type="text"
        value={todo.name}  // this is saved value of todo from the input field
        onChange={(event)=>{setTodo({name:event.target.value,done:false})}}
        placeholder='Enter Todo Item'
        />
        <button type='submit' className={styles.modernButton}>ADD</button>
        </div>
        
      </form>
    </div>
  )
}

export default Forms
