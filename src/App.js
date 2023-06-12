// import React from 'react';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import style from "./App.module.css"
// import TodoListItem from "./TodoListItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    try {
      // throw new Error ("Blah");
      const response = await fetch(url, options);
      if (response.ok === false) {
        throw new Error(`${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((record) => {
        return {
          title: record.fields.title,
          id: record.id,
        };
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  //uE simulates API calls
  useEffect(() => {
    fetchData();
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
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className={style.appContainer}>
              <h1> TodoList </h1>
              <AddTodoForm onAddTodo={AddTodo} />
              {/* just by putting varaiable is ""=== true" , the left condition if is the condition is true*/}
              {isLoading === false ? (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              ) : (
                <p> Loading ...</p>
              )}
            </div>
          }
        ></Route>
        <Route 
        path="/new" 
        element={
        <h1>New Todo List</h1>
        } 
          
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
