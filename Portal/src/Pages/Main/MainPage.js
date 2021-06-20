import React from 'react'
import { Link } from 'react-router-dom'

import './MainPage.scss'

function MainPage() {
    return (
        <div className="main-page">
            <Link to="/" className="main-page__nav-item">
                <div className="main-page__nav-logo">Kotiki union</div>
            </Link>
            <Link to="/How" className="main-page__nav-item">
                How it works
            </Link>
            <Link to="/Contact" className="main-page__nav-item">
                Contact
            </Link>
            <button>
                <Link to="/Login" className="main-page__nav-item">
                    Login!
                </Link>
            </button>

            <div>
                <p className="main-page__title">
                    Invest comfortably with pleasure
                </p>
                <p className="main-page__subtitle">Join us!</p>
            </div>
        </div>
    )
}

export default MainPage
