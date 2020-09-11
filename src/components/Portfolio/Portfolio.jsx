import React from "react";
// import "../style.css";
// import Nav from "../Nav";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

function Portfolio() {
  function templateFunc(event) {
    event.preventDefault();
    document.getElementById("coffeeRunDiv").className = "hidden";
    document.getElementById("platformerDiv").className = "hidden";
    document.getElementById("readmeDiv").className = "hidden";
    document.getElementById("teamDiv").className = "hidden";
    document.getElementById("burgerDiv").className = "hidden";
    document.getElementById("falcoDiv").className = "hidden";
  }

  function coffeeRunFunc(event) {
    event.preventDefault();
    document.getElementById("coffeeRunDiv").className = "unhidden";
    document.getElementById("platformerDiv").className = "hidden";
    document.getElementById("readmeDiv").className = "hidden";
    // document.getElementById("teamDiv").className = "hidden";
    // document.getElementById("burgerDiv").className = "hidden";
    // document.getElementById("falcoDiv").className = "hidden";
  }

  function platformingFunc(event) {
    event.preventDefault();
    document.getElementById("coffeeRunDiv").className = "hidden";
    document.getElementById("platformerDiv").className = "unhidden";
    document.getElementById("readmeDiv").className = "hidden";
    // document.getElementById("teamDiv").className = "hidden";
    // document.getElementById("burgerDiv").className = "hidden";
    // document.getElementById("falcoDiv").className = "hidden";
  }

  function readmeFunc(event) {
    event.preventDefault();
    document.getElementById("coffeeRunDiv").className = "hidden";
    document.getElementById("platformerDiv").className = "hidden";
    document.getElementById("readmeDiv").className = "unhidden";
    // document.getElementById("teamDiv").className = "hidden";
    // document.getElementById("burgerDiv").className = "hidden";
    // document.getElementById("falcoDiv").className = "hidden";
  }

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
              <Link onClick={coffeeRunFunc}>Coffee Run</Link>
            </li>
            <br />
            <li>
              <Link onClick={platformingFunc}>
                Platforming
                <br />
                to Success
              </Link>
            </li>
            <br />
            <li>
              <Link onClick={readmeFunc}>
                ReadMe
                <br />
                Generator
              </Link>
            </li>
            <br />
            <li>
              <Link>
                Team
                <br />
                Tracker
              </Link>
            </li>
            <br />
            <li>
              <Link>
                Eat the
                <br />
                Burger
              </Link>
            </li>
            <br />
            <li>
              <Link>
                Falco
                <br />
                Practice
              </Link>
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
              src="./assets/coffeerun.png"
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
              src="./assets/platforming.png"
              alt="screencap of Platforming to Success login page"
              height="400px"
            />
          </div>

          <div id="readmeDiv" className="hidden">
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
              src="./assets/readme.png"
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
