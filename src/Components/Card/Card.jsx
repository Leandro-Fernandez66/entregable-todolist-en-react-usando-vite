import React from 'react'
import styles from './styles.module.scss'

function Card({ selectedTask }) {
    return (
        <div className={styles.card}>
            <span className={styles.span}>Name:</span>
            <p className={styles.pharagraph}>{selectedTask.name}</p>
            <span className={styles.span}>Description:</span>
            <p className={styles.pharagraph}>{selectedTask.description}</p>
            <span className={styles.span}>Creator:</span>
            <p className={styles.pharagraph}>{selectedTask.creator}</p>
        </div>
    )
}

export default Card