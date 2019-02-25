import React from "react";
import { NavLink } from "react-router-dom";
import "./header_footer.css";

const Nav = () => {
  return (
    <header className="header">
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
