import React from 'react'
import './Body.css'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Body() {
    const cardBackground = require("../../../Assests/cardBackground.jpg").default
    return (
        <div className="body1">
            <Card className="card1" style={{ width: '18rem',marginLeft:'10px' }}>
                <Card.Img variant="top" src={cardBackground}  className="cardBackground1"/>
                <div>
                    <Link to="/Profile" >
                <img src={require("../../../Assests/profile.png").default} className="profile1"></img>
                </Link>
                </div>
                <Card.Body>
                    <Card.Title className="nameTitle1">Dulini Chamathka</Card.Title>
                    <Card.Text>
                       Travel to live ,Live to Travel
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Body
