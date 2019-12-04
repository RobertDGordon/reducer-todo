import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

import ToDo from './ToDo';

const ToDoList = () =>{

    const [newItem, setNewItem] = useState();
    const [state, dispatch] = useReducer(todoReducer, initialState);

    console.log (state)

    return(
        <div>
            {state.todos.map(item =>(
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