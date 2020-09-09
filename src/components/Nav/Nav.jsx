import React from "react";
// import "../style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBody" style={{ display: "flex", flexDirection: "row" }}>
      <div id="topSpace"></div>
      <h1>
        Robert Jarrell <div id="portfoliotext"> Portfolio</div>
      </h1>

      <nav className="navbar navbar-expand-sm justify-content-center">
        <ul className="navbar-nav" style={{ display: "flex", flex: 1 }}>
          <li className="nav-item">
            <Link to="/">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
