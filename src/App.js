// import React from 'react';
import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';



function App() {
  

  const [todoList, setTodoList] = useState([]);   
  function AddTodo (newTodo){
    setTodoList([...todoList, newTodo]);

  }
  // const handleAddTodo = (todo) => {
  //   setNewTodo(todo);
  // };

  return (
    <div>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={AddTodo} />
      <TodoList todoList = {todoList}/>
      
    </div>
  );
}

export default App;
