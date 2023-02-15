import React, {useState} from 'react';
import './App.css';
import { Todolist2_I} from './Todolist2_I';
import {TaskType} from './Todolist2_I'

export type ButtonValues = "All" | "Completed" | "Active"
function App() {

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ])
    const removeTask = (id:number) => {
        setTasks(tasks.filter((task)=>task.id!==id))
    }

    let[filter, setFilter] = useState<ButtonValues>("All")
    console.log(filter)
    const changeFilter = (value: ButtonValues) => {
        setFilter(value)
    }

    let taskForTodolist = tasks

    if(filter === "Completed") {
        taskForTodolist=tasks.filter(e=>e.isDone)
        console.log(taskForTodolist)
    }
    if(filter ==="Active") {
        taskForTodolist=tasks.filter(el=>!el.isDone)
        console.log(taskForTodolist)
    }
    return (
        <div className="App">
            <Todolist2_I title="What to learn" tasks={taskForTodolist} deleteTask={removeTask} filterTasks={changeFilter}/>
        </div>
    );
}

export default App;
