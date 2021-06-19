import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import P1 from "./Pages/p1/p1";
import P2 from "./Pages/p2/p2";
import "./index";
import "./App.css";
import AuthPage from "./Pages/Auth/AuthPage";

function App() {
  return (
    <div className="Head">
      <Router>
        <ul className="NavBar">
          <li>
            <Link to="/login">P1</Link>
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
          <Route path="/login" component={AuthPage} />
          <Route path="/cards" component={P2} />
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="Middle">
      <p1>Тут ваш заголовок</p1>
    </div>
  );
}

export default App;
