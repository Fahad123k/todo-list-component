import React, { useState } from 'react';
import Task from './Task';
function TodoMain(props) {
    // useState of task and itssetTask function
    const [task,setTask]=useState("");
    // useState of taskArray and its setTaskArray function
    const [taskArray,setTaskArray]=useState([]);

    const onTaskChange=(event)=>{
        setTask(event.target.value)
    }

    function addTask(){
        setTaskArray((prevTask)=>{
            return[...prevTask,task];
        })
        setTask("");
    }
  

    const deleteItem = (id) => {
        // console.log(id, 'to be deleted')
        setTaskArray((prevTasks) => {
            return prevTasks.filter((ele, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
           <div>
           <h1>My Todo List</h1>
            <input type="text" value={task} placeholder="Add task"  onChange={onTaskChange}/>
            <button onClick={addTask}>Add</button>
           </div>
           <ol>
            {taskArray.map((val,index)=>{
                return <Task key={index} text={val} id={index} onSelect={deleteItem}/>
            })}
           </ol>
        </div>
        
    );
}

export default TodoMain;