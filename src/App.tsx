import React, {useState} from 'react';
import './App.css';
import {TaskType} from './Todolist2_I'
import {v1} from "uuid";
import {Todolist3_I} from "./Todolist3_I";

export type ButtonValues = "All" | "Completed" | "Active"

export let tasks1 = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false }
]
function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>(tasks1)
    const removeTask = (id:string) => {
        setTasks(tasks.filter((task)=>task.id!==id))
    }

    const addTask = (title: string) =>{
        let newTask = { id: v1(), title: title, isDone: true }
        setTasks([...tasks, newTask])
    }

    return (
        <div className="App">
            <Todolist3_I title="What to learn" tasks={tasks} deleteTask={removeTask} addTask={addTask}/>
        </div>
    );
}

export default App;
