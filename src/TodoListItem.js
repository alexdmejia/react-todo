import React from "react";
import style from "./TodoListItem.module.css"

function TodoListItem(props) {
  
  const { todo } = props;
  const {onRemoveTodo} = props;
  const { title } = todo;

  return (
    <li className={style.listItem}>
      {" "}
      {title} <button type="button"  onClick={() => onRemoveTodo(todo.id)}> Remove </button>
    </li>
  );
}

export default TodoListItem;
