import React from "react";
import Nav from "../Nav/Nav";

function Home() {
  return (
    <div className="homeBody">
      <Nav />
      <h2>About Me</h2>
      <div id="space1"></div>
      <div id="container1">
        <p className="mainText">
          Hello, I'm a 22 year old web design student focusing on full stack
          development, with an interest in back-end design. Technologies I have
          experience in include HTML, CSS, JavaScript, NodeJS, React, MySQL,
          Sequelize, MongoDB, Mongoose, Handlebars, with some dabbling in Java,
          Kotlin, and C++.
        </p>
      </div>
      <div id="container12"></div>
    </div>
  );
}

export default Home;
