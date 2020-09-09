import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home />
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
