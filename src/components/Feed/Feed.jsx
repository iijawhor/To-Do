import React from "react";
import "./Feed.css";
import Tasks from "../../pages/Tasks/Tasks";
import InputBox from "../InputBox/InputBox";
const Feed = () => {
  return (
    <section className="feed">
      <Tasks />
      <InputBox />
    </section>
  );
};

export default Feed;
