import React, {useState} from 'react';
import './App.css';
import { Todolist2_I} from './Todolist2_I';
import {TaskType} from './Todolist2_I'

export type ButtonValues = "All" | "Completed" | "Active"

export let tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false }
]
function App() {


    let [tasks, setTasks] = useState<Array<TaskType>>(tasks1)
    const removeTask = (id:number) => {
        setTasks(tasks.filter((task)=>task.id!==id))
    }

    return (
        <div className="App">
            <Todolist2_I title="What to learn" tasks={tasks} deleteTask={removeTask}/>
        </div>
    );
}

export default App;
