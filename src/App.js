import React, { useState, useReducer } from "react";
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { initialState, todoReducer } from "./reducers";
import './App.css';

function App() {

  const [newItem, setNewItem] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addNewItem = (item) => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <ToDoForm addNewItem={addNewItem} />
      </header>
      <ToDoList {...state} />
    </div>
  );
}

export default App;
