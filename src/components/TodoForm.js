import React from 'react';
import { TodoContext } from './TodoContext';
import '../Styles/TodoForm.css';

function TodoForm() {

    const [ newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={ onAdd }>
            <label>Create your new task!</label>
            <textarea placeholder='Write your next task' value={ newTodoValue } onChange={ onChange }>

            </textarea>
            <div className='todo-form-button-container'>
                <button type="button" className='todo-form-button todo-form-button-cancel' onClick={ onCancel }>
                    Cancel
                </button>
                <button type="onAdd" className='todo-form-button todo-form-button-add'>
                    Add
                </button>
                
            </div>
        </form>
    )
}
export {TodoForm};