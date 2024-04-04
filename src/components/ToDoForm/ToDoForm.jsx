import React from "react";
import "./ToDoForm.css"

export default function ToDoForm() {
    return (
        <form className="form-container">
            <input maxLength="30" placeholder="Task Title" type="text" className="form-input"/>
            <input maxLength="50" placeholder="Task Description" type="text" className="form-input"/>
            <button type={"button"} className="form-button">➕&nbsp; Add</button>
        </form>
    );
}
