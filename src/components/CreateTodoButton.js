import React from 'react';
import '../Styles/CreateTodoButton.css';


function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    
    return (

        <button 
        className='create-todo-button'
        onClick={ onClickButton }
        >
        +
        </button>
    );
}

export { CreateTodoButton };

