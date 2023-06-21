import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css"
import PropTypes from "prop-types";


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

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul className={style.padding}>
        {todoList.map(function (item) {
          return (
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList : PropTypes.array,
  onRemoveTodo : PropTypes.func,
};

export default TodoList;
