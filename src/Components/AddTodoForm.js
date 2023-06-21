import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

export default function AddTodoForm(props) {
  const { onAddTodo } = props;
  const [todoTitle, setTodoTitle] = useState('');
  function handleTitleChange (event){
    let newTodoTitle =  event.target.value;
    setTodoTitle(newTodoTitle);
  }
    function handleAddTodo (event){
      event.preventDefault();
      onAddTodo({
        title: todoTitle,
        id: Date.now(),
      });
      setTodoTitle('');
  }
  return (

    <form onSubmit={handleAddTodo}>

      <InputWithLabel
        id="todoTitle"
        name="title"
        value={todoTitle}
        placeholder="Add a todo"
        onInputChange = {handleTitleChange}
      >
        Title: 
      </InputWithLabel>
      <button type="submit" >Add</button> 
    </form>
  );
};

AddTodoForm.propTypes={
    onAddTodo : PropTypes.func,

};