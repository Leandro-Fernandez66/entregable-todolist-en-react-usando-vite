import React from 'react'
import TodoItem from '../TodoItem/TodoItem.jsx'
import styles from './styles.module.scss'

function TodoList({tasks, taskStatus, deleteTask}) {
  return (
    <ul className={styles['tasks-list']}
      style={tasks.length < 1? {backgroundColor: '#333'} : {}}  >
        {tasks.map(task => (
        <TodoItem key={task.id} task = {task} deleteTask = {deleteTask} taskStatus = {taskStatus} />
      ))}
    </ul>
  )
}

export default TodoList