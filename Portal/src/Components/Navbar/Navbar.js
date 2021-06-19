import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './Navbar.scss'

import AuthPage from '../../Pages/Auth/AuthPage';
import Contact from '../../Pages/Contact/Contact';
import How from '../../Pages/How/How';

function Navbar() {
    return (
        <Router>
        <ul className="navbar">
            <li><Link to="/">Kotiki union</Link></li>
          <li>
            <Link to="/Login">Login</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/How">How it works</Link>
          </li>
        </ul>

        <Switch>
          {'<Route exact path="/" component={Home} />'}
          <Route path="/login" component={AuthPage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/How" component={How}></Route>
        </Switch>
      </Router>
    )
}

export default Navbar
