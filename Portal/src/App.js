import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import How from "./Pages/How/How";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import "./index";
import "./App.css";

function App() {
  return (
    <div className="Head">
      <Router>
        <ul className="NavBar">
          <li>
            <Link to="/Login" className="Login">
              Login
            </Link>
          </li>

          <li>
            <Link to="/Contact" className="Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/How" className="How">
              How it works
            </Link>
          </li>
          <div className="home">
            <Link to="/"></Link>
          </div>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={How} />
          <Route path="/cards" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <div className="Middle"></div>;
}

export default App;
