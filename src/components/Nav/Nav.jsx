import React from "react";
// import "../style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBody">
      <div id="topSpace"></div>
      <h1>
        Robert Jarrell <div id="portfoliotext"> Portfolio</div>
      </h1>

      <nav className="navbar navbar-expand-sm justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
