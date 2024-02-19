import React, { useState } from 'react'
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Form from './Form';
import Footer from './Footer';
const Todo = () => {
    
    const [todos,setTodos] = useState([]); 
    const completedTodo = todos.filter((todo)=>todo.done).length;
    const totalTodos = todos.length;
    
   
  return (
    <div>
      
      <Form todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodo={completedTodo}  totalTodos={totalTodos}/>
    </div>
  )
}

export default Todo
