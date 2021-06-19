import React from 'react'

import UserSvg from '../../../assets/svg/user.svg'
import BellSvg from '../../../assets/svg/bell.svg'
import './Topbar.scss'

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-user">
                <img src={UserSvg}></img>
                <span>John Doe</span>
            </div>
            <div className="topbar-tools">
                <input></input>
                <img src={BellSvg}></img>
            </div>
        </div>
    )
}

export default Topbar
