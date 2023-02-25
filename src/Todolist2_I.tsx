import React, {useState} from 'react';
import {ButtonValues} from "./App";
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (id:string) => void,
    // filterTasks: Function
}

export function Todolist2_I(props: PropsType) {
    let[filter, setFilter] = useState<ButtonValues>("All")
    console.log(filter)
    const changeFilter = (value: ButtonValues) => {
        setFilter(value)
    }

    let taskForTodolist = props.tasks

    if(filter === "Completed") {
        taskForTodolist=props.tasks.filter(e=>e.isDone)
        console.log(taskForTodolist)
    }
    if(filter ==="Active") {
        taskForTodolist=props.tasks.filter(el=>!el.isDone)
        console.log(taskForTodolist)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {taskForTodolist.map((task)=>{
                return(
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={()=>props.deleteTask(task.id)}>Delete</button>
                    </li>
                )
            }
            )}
        </ul>
        <div>
            <button onClick={()=>{changeFilter("All")}}>All</button>
            <button onClick={()=>{changeFilter("Active")}}>Active</button>
            <button onClick={()=>{changeFilter("Completed")}}>Completed</button>
        </div>
    </div>
}

//
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType} from './Todolist2_I'
// import {v1} from "uuid";
// import {Todolist3_I} from "./Todolist3_I";
//
// export type ButtonValues = "All" | "Completed" | "Active"
//
// export let tasks1 = [
//     { id: v1(), title: "HTML&CSS", isDone: true },
//     { id: v1(), title: "JS", isDone: true },
//     { id: v1(), title: "ReactJS", isDone: false }
// ]
// function App() {
//
//
//     let [tasks, setTasks] = useState<Array<TaskType>>(tasks1)
//     const removeTask = (id:string) => {
//         setTasks(tasks.filter((task)=>task.id!==id))
//     }
//
//     const addTask = (title: string) =>{
//         let newTask = { id: v1(), title: title, isDone: true }
//         setTasks([...tasks, newTask])
//     }
//
//     return (
//         <div className="App">
//             <Todolist3_I title="What to learn" tasks={tasks} deleteTask={removeTask} addTask={addTask}/>
//         </div>
//     );
// }
//
// export default App;
//
