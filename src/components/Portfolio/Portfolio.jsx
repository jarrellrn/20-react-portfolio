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
        <div className="portdiv2">
          <div id="coffeeRunDiv" className="hidden">
            <p>
              Coffee Run
              <br />
              <br />
              This is a project that I worked on with two other fantastic web
              developers whose goal is to be able to quickly pinpoint and locate
              various coffee shops around your area. More documentation can be
              found on the github page.
              <br />
              <br />
              <a href="https://shmoesolid.github.io/Coffee-Run/">
                Deployed Link
              </a>
              <br />
              <a href="https://github.com/shmoesolid/Coffee-Run/">
                GitHub Link
              </a>
            </p>
            <img
              src="assets/coffeerun.png"
              alt="screencap of Coffee Run"
              height="400px"
            />
          </div>

          <div id="platformerDiv" className="hidden">
            <p>
              This project was a forray into game design. It uses Phaser as the
              game engine and implements middleware such as Passport for user
              authentication. Users' scores are saved into a leaderboard
              database and the top 15 are viewable on the site.
              <br />
              <br />
              <a href="https://platforming-to-success.herokuapp.com/">
                Deployed Link
              </a>
              <br />
              <a href="https://github.com/mjaeschke/platforming-to-success">
                GitHub Link
              </a>
            </p>
            <img
              src="assets/platforming.png"
              alt="screencap of Platforming to Success login page"
              height="400px"
            />
          </div>

          <div id="homework2Div" className="hidden">
            <p>
              This is a node CLI application that is useful for generating
              readme's. It mainly uses inquirer and fs to write the end file.
              <br />
              <br />
              <a href="https://github.com/jarrellrn/09-READMEgenerator">
                GitHub Link
              </a>
            </p>
            <img
              src="assets/readme.png"
              alt="screencap of readme generator"
              height="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
