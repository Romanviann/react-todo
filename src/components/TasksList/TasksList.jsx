import React from "react";
import Task from "../Task/Task.jsx";

export default function TasksList({tasks}) {
    const toDoTasks = tasks.map(task => (
        <Task key={task.id} task={task}/>
    ));

    return (
        <div>
            {toDoTasks}
        </div>
    );
}