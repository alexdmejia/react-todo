// import React from 'react';
import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState();

  function AddTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <h1> TodoList </h1>
      <AddTodoForm onAddTodo={AddTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
