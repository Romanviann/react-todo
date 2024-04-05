import React from "react";
import "./ToDoForm.css"

export default function ToDoForm({addTask}) {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const taskData = new FormData(form);
        addTask(Object.fromEntries(taskData.entries()));
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input name={"title"} maxLength="30" placeholder="Task Title" type="text" className="form-input"/>
            <input name={"description"} maxLength="50" placeholder="Task Description" type="text"
                   className="form-input"/>
            <button type={"submit"} className="form-button">➕&nbsp; Add</button>
        </form>
    );
}
