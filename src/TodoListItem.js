import React from "react";

function TodoListItem(props) {
  
  const { todo } = props;
  const {onRemoveTodo} = props;
  const { title } = todo;

  return (
    <li>
      {" "}
      {title} <button type="button"  onClick={() => onRemoveTodo(todo.id)}> Remove </button>
    </li>
  );
}

export default TodoListItem;
