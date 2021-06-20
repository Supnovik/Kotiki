import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import HomeSvg from '../../../assets/svg/home.svg'
import FactorySvg from '../../../assets/svg/factory.svg'
import PeopleSvg from '../../../assets/svg/group.svg'
import LogoutSvg from '../../../assets/svg/logout.svg'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/">
                <img className="sidebar-logo" src={HomeSvg}></img>
            </Link>
            <div className="sidebar-items">
                <Link to="/dashboard">
                    <img className="sidebar-item" src={FactorySvg}></img>
                </Link>
                <Link to="/dashboard/company">
                    <img className="sidebar-item" src={PeopleSvg}></img>
                </Link>
            </div>
            <Link to="/">
                <img className="sidebar-logout" src={LogoutSvg}></img>
            </Link>
        </div>
    )
}

export default Sidebar
