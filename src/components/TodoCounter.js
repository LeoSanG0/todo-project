import React from 'react';
import '../Styles/TodoCounter.css';
import { TodoContext } from './TodoContext';


function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (

        <h2 className="todo-counter">
            You have completed { completedTodos } of { totalTodos } tasks!
        </h2>
    );
}

export { TodoCounter };