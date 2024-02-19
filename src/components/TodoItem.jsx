import React from 'react'
import styles from './todoitem.module.css'

const TodoItem =({item,todos,setTodos})=> {

  const handleDelete =(item)=>{
    console.log(`item deleted ${item.name}`);
    setTodos(todos.filter((todo)=>todo!==item))
    // IMPORTANT EXPLAINATION FOR CODE : setTodos(todos.filter((todo)=>todo!==item))
    // the above code loops through the array of all the todos and then it filters out all the current items in array and then cross 
    // checks if the CLICKED item is not as same as the current filtered/looped item and if it is same then the item is removed if not 
    // then it remains the same as it is in the TODO STACK

  }

  const handleClick = (name)=>{
    console.log("CLICKED THE ITEM ",name);
    const newArray = todos.map((todo)=> todo.name === name ? {...todo , done : !todo.done } : todo);
    
    // IMPORTANT EXPLAINATION FOR CODE: todos.map((todo)=> todo.name === name ? {...todo , done : !todo.done } : todo)
    //maps through entire array of todo . Checks which todo item is been CLICKED .
    // If tne todo.name=== name then using the spread operator as ...todo to keep the data of the current array AS IT IS 
    // Then switching the boolean value of done 
    // OR ELESE JUST RETURNS TODO AS IT IS

    setTodos(newArray)
  }
  const todoDone = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={todoDone} onClick={()=>handleClick(item.name)}>{item.name}</span>
      
      <span>
        <button 
        onClick={()=>handleDelete(item)}
        className={styles.deleteButton}>X</button>
      </span>
    </div>
    <hr className={styles.line}/>
    </div>
    
  )
}

export default TodoItem
