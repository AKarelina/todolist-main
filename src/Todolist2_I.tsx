import React, {useState} from 'react';
import {ButtonValues} from "./App";
export type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    deleteTask: (id:number) => void,
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
