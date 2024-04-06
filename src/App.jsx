import {useState} from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ToDoForm from "./components/ToDoForm/ToDoForm.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";
import {v4 as uuidv4} from 'uuid';


function App() {

    const [tasks, setTasks] = useState([
        {id: uuidv4(), title: "Sample title", description: "sample description that could be long-ish", isDone: false}
    ]);

    function addTask(task) {
        task.id = uuidv4();
        setTasks((oldTasks) => {
            return [task, ...oldTasks]
        })
    }

    function deleteTask(taskId) {
        setTasks(() => {
            return tasks.filter(task => task.id !== taskId)
        })
    }

    function markComplete(taskId) {
        setTasks((oldTasks) => {
            return oldTasks.map((task) => task.id === taskId ? {...task, isDone: !task.isDone} : task)
        })
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="reddit-mono-regular margin-25">Welcome to the React To-Do app. Start adding To-dos using
                    the + button</h1>
                <ToDoForm addTask={addTask}></ToDoForm>
                <TasksList markComplete={markComplete} deleteTask={deleteTask} tasks={tasks}></TasksList>
            </div>
        </>
    )
}

export default App
