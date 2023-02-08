import React from 'react';
import './App.css';
import {Todo1_I} from "./Todo1_I";

function App() {
    const title1 = "What needs to be done"
    const title2= "I have already learned"
    const task1 = [
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"ReactJS", isDone:true},
        {id:4, title:"HTML&CSS", isDone:true},
        {id:5, title:"JS", isDone:true},
        {id:6, title:"ReactJS", isDone:true}
    ]
    const task2 = [
        {id:1, title:"Hello World", isDone:true},
        {id:2, title:"Another text", isDone:true},
        {id:3, title:"Example text", isDone:true}
    ]
    return (
        <div className="App">
            <Todo1_I tasks={task1} title={title1}/>
            <Todo1_I tasks={task2} title={title2}/>
        </div>
    );
}

export default App;
