import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            {/* <img src={require("../../Assests/home.jpg").default} className="Walpaper"></img> */}
            <div className="logo">
            <img src={require("../../Assests/logo.png").default} className="logo"></img>
            </div>
        </div>
    )
}

export default Home
