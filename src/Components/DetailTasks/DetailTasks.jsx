import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../Card/Card'
import styles from './styles.module.scss'

function DetailTasks() {

  const [selectedTask, setSelectedTask] = useState({})
  const { taskId } = useParams()

  useEffect(() => {
    async function fetchTask() {
      try {
        const response = await fetch(`http://localhost:3000/todos/${taskId}`, {
          method: "GET",
        });
        const data = await response.json()
        setSelectedTask(data)
      } catch (error) {
        console.log("Error fetching data: ", error)
      }
    }
    fetchTask()
  }, [taskId]
  )

  return (
    <div className={styles['detail-container']}>
      <h2 className={styles['detail-title']}>Detail Tasks</h2>
      <Card selectedTask={selectedTask} />
    </div>
  )
}

export default DetailTasks