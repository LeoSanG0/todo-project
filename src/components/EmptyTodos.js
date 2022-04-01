import React from 'react';
import  '../Styles/TodoCounter.css'

function EmptyTodos () {
    return  (
        <p className="todo-counter">No taks?<br></br>Start by creating your first task!</p>
    )
}

export { EmptyTodos };