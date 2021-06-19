import { React, useState } from 'react'
import { useHistory } from 'react-router-dom'

import './CompaniesPage.scss'

function CompaniesPage() {
    const companies = [
        { id: 1, name: 'Google inc' },
        { id: 1, name: 'Google inc' },
        { id: 1, name: 'Google inc' },
        { id: 1, name: 'Google inc' },
        { id: 1, name: 'Google inc' },
        { id: 1, name: 'Google inc' },
    ]

    let history = useHistory()

    function handleClick() {
        history.push('/dashboard/companies/company')
    }

    return (
        <div className="companies-page">
            <div className="companies-page__controls">
                <span>Legal entities:</span>
                <div>Sorting</div>
                <div>Filter</div>
            </div>
            <div className="companies-page__companies">
                {companies.map((company) => {
                    return (
                        <div className="companies-page__company">
                            <span className="companies-page__company-name">
                                {company.name}
                            </span>
                            <div
                                className="companies-page__company-btn"
                                onClick={handleClick}
                            >
                                Got it
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CompaniesPage
