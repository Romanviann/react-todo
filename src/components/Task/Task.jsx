import React from "react";
import "./Task.css";

export default function Task({task, borderBottom, deleteTask, markComplete}) {

    return (
        <div className={"task-container"} style={{borderBottom: borderBottom}}>
            <div style={{textDecoration: task.isDone ? "line-through" : "initial"}} className={"task-body"}>
                <h3>{task.title}</h3>
                <h5>{task.description}</h5>
            </div>
            <div className={"task-controls"}>
                <button onClick={() => deleteTask(task.id)} type={"button"} className={"task-control-buttons delete-button"}>Delete</button>
                <button onClick={() => markComplete(task.id)} type={"button"} className={"task-control-buttons check-button"}>Mark Complete</button>
            </div>

        </div>
    );
}