import React from "react";
import "./Navbar.css";
import ReactLogo from "./../../assets/images/react.png"


export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content poppins-medium">
                <img src={ReactLogo} width="50px" alt="react-logo" />
                <h2>React To-Do</h2>
            </div>
            <div className="reddit-mono-regular">
                To-Do List
            </div>
        </nav>
    )
}