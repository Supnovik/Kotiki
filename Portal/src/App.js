import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import AuthPage from './Pages/Auth/AuthPage'
import MainPage from './Pages/Main/MainPage'
import DashboardPage from './Pages/Dashboard/DashboardPage'

import './App.css'

function App() {
    return (
        <Router className="app">
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/login" component={AuthPage} />
                <Route path="/dashboard" component={DashboardPage}></Route>
            </Switch>
        </Router>
    )
}

export default App
