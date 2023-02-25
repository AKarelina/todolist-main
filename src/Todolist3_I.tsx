import React, {ChangeEvent, ChangeEventHandler, MouseEvent, useState} from 'react';
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
    addTask: (title: string)=> void
}

export function Todolist3_I(props: PropsType) {
    const [filter, setFilter] = useState<ButtonValues>("All")
    const [title, setTitle] = useState("")

    let taskForTodolist = props.tasks

    if(filter === "Completed") {
        taskForTodolist= props.tasks.filter(e=>e.isDone)
        console.log(taskForTodolist)
    }
    if(filter ==="Active") {
        taskForTodolist = props.tasks.filter(el=>!el.isDone)
        console.log(taskForTodolist)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(title)
    }

    const onChangeFilterHandler = (buttonName:ButtonValues) =>{
        setFilter(buttonName)

    }
    const deleteTask =(taskId: string)=>{
        props.deleteTask(taskId)
    }

    const mappedTasks = taskForTodolist.map((task)=>{
                return(
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={()=>deleteTask(task.id)}>Delete</button>
                    </li>
                )
            }
        )


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={onChangeHandler}/>
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {/*{taskForTodolist.map((task)=>{*/}
            {/*        return(*/}
            {/*            <li key={task.id}>*/}
            {/*                <input type="checkbox" checked={task.isDone}/>*/}
            {/*                <span>{task.title}</span>*/}
            {/*                <button onClick={()=>deleteTask(task.id)}>Delete</button>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*)}*/}
            {mappedTasks}
        </ul>
        <div>
            <button onClick={()=>onChangeFilterHandler('All')}>All</button>
            <button onClick={()=>onChangeFilterHandler('Active')}>Active</button>
            <button onClick={()=>onChangeFilterHandler('Completed')}>Completed</button>
        </div>
    </div>
}
