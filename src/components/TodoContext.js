import React from 'react';
import {useLocalStorage} from '../components/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item:todos,
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [ searchValue, setSearchValue ] = React.useState('');
      
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter( todos => !!todos.completed ).length; //!! Afirmación, igual que decir todos.completed == true
      const totalTodos = todos.length;

      // code for make filter for letter in seacrh input
      let searchedTodo = [  ];
    
      if ( !searchValue.length >= 1 ) {
        searchedTodo = todos;
      } else {
          searchedTodo = todos.filter( todo => {
            const  todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes( searchText );
          } )
      }

      // Code for mark as completed task
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [ ...todos ];
        newTodos[ todoIndex ].completed = true;
        saveTodos(newTodos);
      }

       // Code for mark as eliminated task
       const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [ ...todos ];
        newTodos.splice( todoIndex, 1 );
        saveTodos(newTodos);
      }

      // Code for add a task
      const addTodo = (text) => {
        const newTodos = [ ...todos ];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
      }

    return (

        <TodoContext.Provider value={ { 

            error,             
            loading,
            totalTodos, 
            completedTodos, 
            searchValue,
            setSearchValue,
            searchedTodo, 
            completeTodo, 
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
           
         } }>
            
            { props.children }

        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};
