import React, { useState } from "react";
import "./InputBox.css";
import { AddRoundedIcon } from "../../Icons/icons";
import { useTodo } from "../../contexts/TodoContexts";
const InputBox = () => {
  const { addTodo } = useTodo();
  const [todoInputValue, setTodoInputValue] = useState("");
  const handleItemAdd = (e) => {
    e.preventDefault();
    if (!todoInputValue) return;
    addTodo({ todoInputValue, completed: false });
    setTodoInputValue("");
  };
  return (
    <section className="inputBox">
      <form action="" onSubmit={handleItemAdd} className="inputBoxForm">
        <AddRoundedIcon className="InputBoxIcon" />
        <input
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
          type="text"
          placeholder="Add a task"
          className="inputBoxFormInput"
        />
        <button type="submit"></button>
      </form>
    </section>
  );
};

export default InputBox;
