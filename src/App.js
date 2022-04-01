// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {AppUI} from './components/AppUI';
import {TodoProvider}  from './components/TodoContext';

// const defaultTodos = [
//   { text: 'Aprender ccs', completed: true },
//   { text: 'Aprender HTML', completed: false },
//   { text: 'Aprender REACT', completed: false }
// ];



function App() {

  return (
      
    <TodoProvider>
      
      <AppUI />

    </TodoProvider>
      
  );
};

export default App;
