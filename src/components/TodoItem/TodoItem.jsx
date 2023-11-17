import React, { useState } from "react";
import "./TodoItem.css";
import { ClearIcon, DoneIcon, DeleteIcon, EditIcon } from "../../Icons/icons";
import { useTodo } from "../../contexts/TodoContexts";
const TodoItem = ({ todo }) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodo();
  const [todoMsg, setTodoMsg] = useState(todo.todoInputValue);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  const toggleCompleted = () => {
    toggleTodo(todo.id);
  };

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div className={`todoItem ${todo.completed ? "isChecked" : ""}`}>
      <div className="todoInputField">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          className="todoItemCheckbox"
        />
        <input
          type="text"
          readOnly={!isTodoEditable}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          className={`todoText ${isTodoEditable ? "editInput" : ""}`}
        />
      </div>
      {/* deleteButton,updateButton */}
      <div className="todoItemButtons">
        <button
          onClick={() => {
            if (todo.completed) return;
            if (isTodoEditable) {
              editTodo();
            } else {
              setIsTodoEditable((prev) => !prev);
            }
          }}
        >
          {isTodoEditable ? (
            <DoneIcon className="todoItemEditIcon" />
          ) : (
            <EditIcon className="todoItemEditIcon" />
          )}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon className="todoItemDeleteIcon" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
