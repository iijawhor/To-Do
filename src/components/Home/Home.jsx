import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
const Home = () => {
  return (
    <section className="home">
      <Sidebar />
      <Feed />
    </section>
  );
};

export default Home;
