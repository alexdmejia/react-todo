import React from "react";
import TodoListItem from "./TodoListItem";

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

export default function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem key={item.id} todo={item}/>;
      })}
    </ul>
  );
}
