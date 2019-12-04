import React, { useState, useReducer } from "react";

import ToDo from './ToDo';

const ToDoList = (props) =>{

    

    console.log (props)

    return(
        <div>
            {props.state.map(item =>(
                <ToDo
                    key={item.id}
                    item={item.item}
                    completed={item.completed}
                />
            ))}
        </div>
    )
}

export default ToDoList;