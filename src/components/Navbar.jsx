import React from "react";
import logo from "../img/Frame.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" />
      <ul className="nav_list">
        <li className="nav_desk">Grow your career</li>
        <li className="nav_desk">Build a team</li>
        <li className="nav_desk">Meet the founders</li>
        <li className="nav_desk">Mentorship</li>
        <li className="nav_desk">Say hello</li>
      </ul>
    </div>
  );
};
