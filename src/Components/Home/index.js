import React from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom';


//home page


function Home() {
    const history = useHistory();
    return (
        <div className="home">
            
            <div className="logo">
                <img src={require("../../Assests/logo.png").default} className="logo"></img>
            </div>
            <div className="buttonPlace">

                <button className="button" onClick={() => history.push("/Login")}>

                    Let's Get Started

                </button>

            </div>
            </div>
    )
}

export default Home
