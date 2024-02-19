import React from 'react'
import TodoItem from './TodoItem'
import styles from'./todolist.module.css';

const TodoList=({todos,setTodos})=> {

  const sortedTodos = todos.slice().sort((a,b)=>Number(a.done)- Number(b.done));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item)=>
      <TodoItem item={item}  key={item.name} todos={todos} setTodos={setTodos} />
      )}
    </div>
  )
}

export default TodoList
