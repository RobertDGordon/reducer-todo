import React, {useState} from 'react'

const ToDoForm = props => {

    const [newItem, setNewItem] = useState('')

    const handleChanges = e => {
        setNewItem(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.addNewItem(newItem)
    }

    const handleClear = e => {
        e.preventDefault()
        props.clearCompleted()
    }

    return(
        <>
        <form onSubmit = {handleSubmit}>
            <input
                onChange={handleChanges}
                type='text'
                name='item'
                value={newItem}
            />
            <button>Add</button>
        </form>
        <button onClick={handleClear}>Clear</button>
        </>
    )
}

export default ToDoForm;