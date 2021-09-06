import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div>
             <img src={require("../../../Assests/logo.png").default} className="logoDashboard"></img>
             </div>
             <div >
             <input className="serach" type="text" placeholder="@Search" />
             </div>
        </div>
    )
}

export default Header
