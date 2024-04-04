import { useState } from 'react'

import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ToDoForm from "./components/ToDoForm/ToDoForm.jsx";

function App() {

  return (
    <>
        <Navbar></Navbar>
        <h1 className="reddit-mono-regular margin-25">Welcome to the React To-Do app. Start adding To-dos using the + button</h1>
        <ToDoForm></ToDoForm>
    </>
  )
}

export default App
