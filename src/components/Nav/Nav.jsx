import React from "react";
import "./style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navBody">
      <div id="topSpace"></div>
      <h1>
        Robert Jarrell <div id="portfoliotext"> Portfolio</div>
      </h1>
      <div className="navbarDiv">
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" style={{ textDecoration: "none" }}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
