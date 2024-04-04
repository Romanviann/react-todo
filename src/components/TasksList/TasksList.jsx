import React from "react";

export default function TasksList({tasks}) {
    const toDoTasks = tasks.map(task => (
        <div>
            <h3>{task.title}</h3>
            <h5>{task.description}</h5>
        </div>
    ));

    return (
        <div>
            {toDoTasks}
        </div>
    );
}