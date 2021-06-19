import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import P1 from "./Pages/p1/p1";
import P2 from "./Pages/p2/p2";
import "./index";

function App() {
  return (
    <div className="Head">
      <Router>
        <ul className="NavBar">
          <li>
            <Link to="/p1">P1</Link>
          </li>
          <li>
            <Link to="/p2">P2</Link>
          </li>
          <div className="home">
            <Link to="/"></Link>
          </div>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={P1} />
          <Route path="/cards" component={P2} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return <div className="middle"> </div>;
}

export default App;
