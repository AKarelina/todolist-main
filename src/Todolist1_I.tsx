import React from "react";
import '../src/App.css';

type Todo1_IPropsType = {
    title: string,
    new_title?: string,
    tasks: Array<TasksType>
}

type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist1_I =(props:Todo1_IPropsType) =>{
    return (
            <div>
                <h3>{props.title}</h3>
                <h3>{props.new_title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((task,index)=>{
                        return (
                            <div>
                                <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>

                                </li>

                            </div>

                        )
                    })}
                    {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
    );
}

