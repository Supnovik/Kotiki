import React from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.scss'

function AuthPage() {
    return (
        <div className="auth-page">
            <div className="auth-page__form">
                <div className="auth-page__title">Welcome</div>
                <input
                    className="auth-page__input"
                    placeholder="Email Address"
                ></input>
                <input
                    className="auth-page__input"
                    placeholder="*******"
                    type="password"
                ></input>
                <Link to="/pages/dashboard" className="auth-page__button">
                    Login
                </Link>
                <div className="auth-page__toggler">
                    <span>password</span>&nbsp;| <span>Register</span>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
