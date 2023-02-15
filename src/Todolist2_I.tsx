import React from 'react';
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
    filterTasks: Function
}

export function Todolist2_I(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((task)=>{
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
            <button onClick={()=>{props.filterTasks("All")}}>All</button>
            <button onClick={()=>{props.filterTasks("Active")}}>Active</button>
            <button onClick={()=>{props.filterTasks("Completed")}}>Completed</button>
        </div>
    </div>
}
