import React from 'react'
import { useNavigate } from "react-router-dom"
import styles from './styles.module.scss'

const TodoItem = ({ task, deleteTask, taskStatus }) => {

  const navigate = useNavigate()

  const handleTaskClick = (id) => {
    navigate(`/tasks/${id}`)
  }

  return (
    <li className={styles.task}>
      <div className={styles['div-container']}>
        <input type="checkbox" defaultChecked={task.isCompleted} onClick={() => taskStatus(task.id)} />
        <p className={task.isCompleted ? `${styles['task--completed']}` : `${styles['task--uncompleted']}`} onClick={()=> handleTaskClick(task.id)} >{task.name}</p>
      </div>
      <button className={styles['delete-button']} onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  )
}

export default TodoItem