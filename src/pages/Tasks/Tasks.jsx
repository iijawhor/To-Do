import React from "react";
import "./Tasks.css";
import { MoreHorizSharpIcon } from "../../Icons/icons";
import TodoItem from "../../components/TodoItem/TodoItem";
import { useTodo } from "../../contexts/TodoContexts";
const Tasks = () => {
  const { todos } = useTodo();
  return (
    <section className="myTasks">
      <div className="taskHeader">
        <div className="taskHeaderLeft">
          <h1 className="taskHeaderTitle">My Day</h1>
          <p className="taskDate">Thursday, 16 November</p>
        </div>
        <div className="taskHeaderRight">
          <MoreHorizSharpIcon className="taskHeaderMoreIcon" />
        </div>
      </div>
      <div className="taskTodoContainer">
        {todos.map((todo) => (
          <div className="todoItems" key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tasks;
