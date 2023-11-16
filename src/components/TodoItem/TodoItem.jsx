import React from "react";
import "./TodoItem.css";
import { useTodo } from "../../contexts/TodoContexts";
const TodoItem = ({ todo }) => {
  const { toggleTodo } = useTodo();
  const todoText = todo.todoInputValue || "Default Todo Text";
  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };
  return (
    <div className="todoItem">
      <div className="todoInputField">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="todoItemCheckbox"
        />
        <input type="text" readOnly value={todoText} className="todoText" />
      </div>
      {/* deleteButton,updateButton */}
      <div className="todoItemButtons"></div>
    </div>
  );
};

export default TodoItem;
