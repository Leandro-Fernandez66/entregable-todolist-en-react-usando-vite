import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import TodoList from "../TodoList/TodoList.jsx";
import AddTodoForm from "../AddTodoForm/AddTodoForm.jsx";

function HomeBase() {
  const [task, setTask] = useState({ name: "", description: "", creator: "" });
  const [tasks, setTasks] = useState([]);
  const [completedTask, setCompletedTask] = useState(false);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch("http://localhost:3000/todos", {
          method: "GET",
        });
        const data = await response.json();
        setTasks(data)
      } catch (error) {
        console.log("Error fetching data: ", error)
      }
    }
    fetchTasks()
  }, [])

  const taskStatus = (taskId) => {
    const arrayIndex = tasks.findIndex((task) => task.id === taskId)
    tasks[arrayIndex].isCompleted = !tasks[arrayIndex].isCompleted

    const putData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tasks[arrayIndex]),
        })

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const responseData = await response.json()
        console.log("Success:", responseData)
      } catch (error) {
        console.error("Error:", error)
      }
    }
    putData()

    setCompletedTask(!completedTask)
    setTasks(tasks)
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    const newTask = {
      id: String(Date.now()),
      name: task.name,
      isCompleted: false,
      description: task.description,
      creator: task.creator,
    };

    const postData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const responseData = await response.json() 
        console.log("Success:", responseData) 
      } catch (error) {
        console.error("Error:", error) 
      }
    }
    postData()

    const newList = [...tasks, newTask]
    setTasks(newList);
    setTask({ name: "", description: "", creator: "" })
  };

  const deleteTask = (taskId) => {
    const taskRemove = tasks.filter(
      (removeOfTasks) => removeOfTasks.id !== taskId
    );
    const deleteData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/todos/${taskId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json() 
        console.log("Success:", responseData) 
      } catch (error) {
        console.error("Error:", error) 
      }
    };
    deleteData()

    setTasks(taskRemove)
  }

  return (
    <div>
      <header className={styles.header}>
        <h1>To Do List</h1>
      </header>
      <main className={styles['main-container']}>
        <AddTodoForm
          handleSubmit={handleSubmit}
          task={task}
          handleChange={handleChange}
        />
        <h2 className={styles['tasks-title']}>Tasks:</h2>
        <TodoList tasks={tasks} taskStatus={taskStatus} deleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default HomeBase;
