import React, { useState } from "react";
import "./Sidebar.css";
import {
  LightModeOutlinedIcon,
  HomeRoundedIcon,
  PersonRoundedIcon,
  AddRoundedIcon,
  GradeOutlinedIcon,
  ListAltOutlinedIcon
} from "../../Icons/icons";
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(false);
  const handleActive = (index) => {
    setActiveItem(index);
  };
  return (
    <section className="sidebar">
      <div className="accountDetails">
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/009/835/original/the-human-icon-and-logo-vector.jpg"
          alt="jak"
          className="accountIcon"
        />
        <div className="accountDetail">
          <h2 className="userName">Jawhor Ali Khan</h2>
          <p className="userEmail">jawhorali602@gmail.com</p>
        </div>
      </div>
      <div className="sidebarSearch">
        <input
          type="text"
          placeholder="Search..."
          className="sidebarSearchInput"
        />
      </div>
      <ul className="sidebarItemList">
        <li
          className={`sidebarItem ${activeItem === 0 ? "active" : ""}`}
          onClick={() => handleActive(0)}
        >
          <LightModeOutlinedIcon className="sidebarItemIcon" />
          My Day
        </li>
        <li
          className={`sidebarItem ${activeItem === 1 ? "active" : ""}`}
          onClick={() => handleActive(1)}
        >
          <GradeOutlinedIcon className="sidebarItemIcon" />
          Important
        </li>
        <li
          className={`sidebarItem ${activeItem === 2 ? "active" : ""}`}
          onClick={() => handleActive(2)}
        >
          <ListAltOutlinedIcon className="sidebarItemIcon" />
          Planned
        </li>

        <li
          className={`sidebarItem ${activeItem === 3 ? "active" : ""}`}
          onClick={() => handleActive(3)}
        >
          <PersonRoundedIcon className="sidebarItemIcon" />
          Assigned to me
        </li>
        <li
          className={`sidebarItem ${activeItem === 4 ? "active" : ""}`}
          onClick={() => handleActive(4)}
        >
          <HomeRoundedIcon className="sidebarItemIcon" />
          Tasks
        </li>
      </ul>
      <div className="sidebarAddTask">
        <AddRoundedIcon className="sidebarItemIcon" />
        <p className="sidebarItemAddTitle"> New Item</p>
      </div>
    </section>
  );
};

export default Sidebar;
