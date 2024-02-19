import React from 'react'
import styles from './footer.module.css';

const Footer=({completedTodo,totalTodos})=> {
  return (
    <div className={styles.footer}>
        <span className={styles.item}>Completed Todos:{completedTodo}</span>
        <span className={styles.item}>Total Todos:{totalTodos}</span>
    </div>
  )
}

export default Footer
