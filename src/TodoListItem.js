import React from 'react'

function TodoListItem(props) {
  const {todo} = props;
  const {title} = todo;
   
  return (
    <li> {title} </li>
  )
}

export default TodoListItem;