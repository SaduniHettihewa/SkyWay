import React from 'react'
import './Body.css'
import {Card} from 'react-bootstrap'


function Body() {
    const cardBackground = require("../../../Assests/cardBackground.jpg").default
    return (
        <div className="body">
            <Card className="card" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cardBackground}  className="cardBackground"/>
                <div>
                <img src={require("../../../Assests/profile.png").default} className="profile"></img>
                </div>
                <Card.Body>
                    <Card.Title className="nameTitle">Dulini Chamathka</Card.Title>
                    <Card.Text>
                       Travel to live ,Live to Travel
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Body
