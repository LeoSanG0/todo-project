import React from 'react';
import App from '../App';

import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {CreateTodoButton} from './CreateTodoButton'
import {TodoItem} from './TodoItem'
import {TodoContext} from './TodoContext';
import {Modal} from './Modal'
import {TodoForm} from './TodoForm';
import {EmptyTodos} from './EmptyTodos';
import {TodosError} from './TodosError';
import {TodosLoading} from './TodosLoading';


function AppUI() {  
    
  const {
    error,
    loading,
    searchedTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);


    return (
        <React.Fragment>

       <TodoCounter />
      
       <TodoSearch /> 
      
            <TodoList>

            { error &&  <TodosError /> }
            { loading &&  <TodosLoading /> }
            { (!loading && !searchedTodo.length) && <EmptyTodos /> }
    
             { searchedTodo.map(todo => (

               <TodoItem 

               key={ todo.text }
               text={ todo.text }
               completed={ todo.completed }
               onCompleted={ () => completeTodo( todo.text ) }
               onDelete={ () => deleteTodo( todo.text ) }

               />
             ))}
           </TodoList>
    

           { openModal && (
             <Modal>

              <TodoForm />
              
             </Modal>
           )}

       <CreateTodoButton
         setOpenModal={setOpenModal}
       />
       
     </React.Fragment>

    );
}

export {AppUI};