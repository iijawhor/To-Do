import React from "react";
import "./Tasks.css";
import { MoreHorizSharpIcon } from "../../Icons/icons";
const Tasks = () => {
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
    </section>
  );
};

export default Tasks;
