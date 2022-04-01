import React from 'react';
import '../Styles/TodoItem.css';

function TodoItem(props) {
    
    const onCompleted = () => {
        alert( props.text + ' is task completed! ' );
    }
    
    const onDelete = () => {
        alert( props.text + ' is eliminated!' );
    }
    
    return (

        <li className='todo-item'>
            <span className={ `icon icon-check ${ props.completed && 'icon-check--active' } ` }
            onClick={ props.onCompleted }
            >
            &#10003;
            </span>
            <p className={ `todo-item-p ${ props.completed && 'todo-item-p--complete' } ` }>
            { props.text }
            </p>
            <span className='icon icon-delete'
            onClick={ props.onDelete }
            >
            &#215;
            </span>
        </li>

    );

}

export { TodoItem };
