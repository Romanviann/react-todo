import React from "react";
import Task from "../Task/Task.jsx";

export default function TasksList({tasks}) {
    const toDoTasks = tasks.map(task => (
        <Task key={task.id} task={task} borderBottom={tasks.length > 1 ? '1px solid gray' : '0'}/>
    ));

    return (
        <div>
            {toDoTasks}
        </div>
    );
}