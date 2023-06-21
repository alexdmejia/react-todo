import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";


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
TodoListItem.propTypes = {
  todo : PropTypes.object,
  onRemoveTodo : PropTypes.func,
  title : PropTypes.string,
};
export default TodoListItem;
