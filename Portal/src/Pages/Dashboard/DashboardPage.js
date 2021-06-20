import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import CompaniesPage from './Companies/CompaniesPage'
import CompanyPage from './Companies/Company/CompanyPage'

import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'

import './DashboardPage.scss'

function DashboardPage() {
    return (
        <div className="dashboard-page">
            <Sidebar></Sidebar>
            <Topbar></Topbar>
            <Switch className="dashboard-page__content">
                <Redirect exact from="/dashboard" to="/dashboard/companies" />
                <Route
                    exact
                    path="/dashboard/companies"
                    component={CompaniesPage}
                ></Route>
                <Route
                    path="/dashboard/companies/company"
                    component={CompanyPage}
                ></Route>
            </Switch>
        </div>
    )
}

export default DashboardPage
