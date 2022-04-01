import React from 'react';
import '../Styles/TodosLoading.css';

function TodosLoading ( { loading } ) {
    return (
        <div class='spinner'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export { TodosLoading };