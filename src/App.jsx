import {useState} from 'react'

import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ToDoForm from "./components/ToDoForm/ToDoForm.jsx";
import TasksList from "./components/TasksList/TasksList.jsx";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "Sample title", description: "sample description that could be long-ish", isDone: false}
    ]);

    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <h1 className="reddit-mono-regular margin-25">Welcome to the React To-Do app. Start adding To-dos using
                    the + button</h1>
                <ToDoForm></ToDoForm>
                <TasksList tasks={tasks}></TasksList>
            </div>
        </>
    )
}

export default App
