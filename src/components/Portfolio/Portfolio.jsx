import React from "react";
// import "../style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Portfolio() {
  return (
    <div className="portfolioBody">
      <Nav />
      <h2>Portfolio</h2>
      <div className="portfolioText">
        <p>
          A few of the projects I've worked on. Click a link on the left to
          learn more.
        </p>
      </div>
      <div id="space1"></div>
      <div id="container2">
        <div id="portdiv1">
          <ul>
            <li>
              <a href="javascript:;" id="coffeeRun">
                Coffee Run
              </a>
            </li>
            <br />
            <li>
              <a href="javascript:;" id="platformer">
                Platforming
                <br />
                to Success
              </a>
            </li>
            <br />
            <li>
              <a href="javascript:;" id="homework2">
                ReadMe
                <br />
                Generator
              </a>
            </li>
            <br />
            <li>
              <a href="javascript:;" id="teamTrack">
                Team
                <br />
                Tracker
              </a>
            </li>
            <br />
            <li>
              <a href="javascript:;" id="borger">
                Eat the
                <br />
                Burger
              </a>
            </li>
            <br />
            <li>
              <a href="javascript:;" id="falco">
                Falco
                <br />
                Practice
              </a>
            </li>
          </ul>
        </div>
        <div className="portdiv2"></div>
      </div>
    </div>
  );
}

export default Portfolio;
