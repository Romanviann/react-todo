import React from "react";
import Task from "../Task/Task.jsx";

export default function TasksList({tasks, deleteTask, markComplete}) {
    const toDoTasks = tasks.map(task => (
        <Task markComplete={markComplete} deleteTask={deleteTask} key={task.id} task={task} borderBottom={tasks.length > 1 ? '1px solid gray' : '0'}/>
    ));

    return (
        <div>
            {tasks.length === 0 && <h2> You have no notes</h2>}
            {tasks.length > 0 && <div>{toDoTasks}</div>}
        </div>
    );
}