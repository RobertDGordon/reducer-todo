import React, { useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducers";

const ToDo = (props) =>{
    return(
        <div>
            <p>{props.item}</p>
        </div>
    )
}

export default ToDo;