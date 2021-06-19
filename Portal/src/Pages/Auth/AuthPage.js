import React from 'react'
import './AuthPage.scss'

function AuthPage() {
    return (
        <div className="auth-page">
            <div className="auth-page__title">Welcome</div>
            <input className="auth-page__input" placeholder="Email Address"></input>
            <input className="auth-page__input" placeholder="*******" type="password"></input>
            <button className="auth-page__button">Login</button>
        </div>
    )
}

export default AuthPage
