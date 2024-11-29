import React from 'react'
import styles from './styles.module.scss'

const AddTodoForm = ({ handleSubmit, task, handleChange }) => {
  return (
    <div>
      <form className={styles['todo-form']} onSubmit={handleSubmit}>
        <div className={styles.wrapper}>
          <input type="text" className={styles['name-input']} placeholder='enter task name' required name='name' value={task.name} onChange={handleChange} />
          <div className={styles['description-creator']}>
            <input type="text" className={styles['description-input']} placeholder='task description' required name='description' value={task.description} onChange={handleChange} />
            <input type="text" className={styles['creator-input']} placeholder='creator' required name='creator' value={task.creator} onChange={handleChange} />
          </div>
        </div>
        <button type='submit' className={styles['add-button']} >Add Task</button>
      </form>
    </div>
  )
}

export default AddTodoForm