// import React from 'react';
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



function App() {
   const [newTodo, setNewTodo] = useState('');

   
  const handleAddTodo = (todo) => {
    setNewTodo(todo);
  };

  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
        <p>New todo: {newTodo}</p>

      <TodoList/>
      
    </div>
  );
}

export default App;
