import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="logo">
            <img src={require("../../Assests/logo.png").default} className="logo"></img>
            </div>
            <div className="buttonPlace">
                <button className="button">
                    Let's Go
                </button>
            </div>

        </div>
    )
}

export default Home
