// import React from 'react';
import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
// import TodoListItem from "./TodoListItem";

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] =  useState(true);

  //uE simulates API calls
  useEffect (() => {
     new Promise((resolve, reject) =>{
      setTimeout( () => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
          }
        });        
      } , 2000);
    }).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []); 

  useEffect(() => {
    if (isLoading === false) {
     localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);


  function AddTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  function removeTodo(id) {
    const updatedTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodos);
  } 
  
  return (
    <>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={AddTodo} />
      {/* just by putting varaiable is ""=== true" , the left condition if is the condition is true*/}
      {(isLoading === false) ? ( <TodoList todoList={todoList}  onRemoveTodo={removeTodo}  />) : ( <p> Loading ...</p>) } 
    </>
  );
}



export default App;
