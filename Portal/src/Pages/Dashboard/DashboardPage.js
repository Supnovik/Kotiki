import React from 'react'
import { Route, Switch } from 'react-router-dom'
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
                <Route
                    exact
                    path="/dashboard"
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
