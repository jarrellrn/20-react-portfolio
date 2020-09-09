import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/portfolio" exact>
        <Portfolio />
      </Route>
      {/* <Route path="/Gallery" exact>
        <Gallery />
      </Route>
      <Route path="/Web" exact>
        <Web />
      </Route>
      <Route path="/Content" exact>
        <Content />
      </Route>
      <Route path="/Contact" exact>
        <Contact />
      </Route> */}
    </Router>
  );
}

export default App;
