import React from "react";

const todoList = [
  {
    id: 1,
    title: "react project",
  },
  {
    id: 2,
    title: "JavaScript XML",
  },
  {
    id: 3,
    title: "react Dove class",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {
            todoList.map(function (item) {
                return <li key={item.id}>{item.title}</li>;
            })
        }
      </ul>
    </div>
  );
}


export default App;
