import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AuthPage.scss'

function AuthPage() {
    let [registerp, setRegisterp] = useState(false)
    let [registery, setRegistery] = useState(false)
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
                {registerp ? (
                    <input
                        className="auth-page__input"
                        placeholder="INN"
                        type="INN"
                    ></input>
                ) : (
                    <div></div>
                )}
                {registery ? (
                    <input
                        className="auth-page__input"
                        placeholder="FIO"
                        type="FIO"
                    ></input>
                ) : (
                    <div></div>
                )}

                <Link to="/dashboard" className="auth-page__button">
                    Login
                </Link>
                <div className="auth-page__toggler">
                    <span
                        onClick={() => {
                            setRegisterp((registerp = !registerp))
                            setRegistery(false)
                        }}
                    >
                        Register as legal entity
                    </span>
                    &nbsp;|{' '}
                    <span
                        onClick={() => {
                            setRegistery((registery = !registery))
                            setRegisterp(false)
                        }}
                    >
                        Register as person
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AuthPage
