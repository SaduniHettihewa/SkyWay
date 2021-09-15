import React, { useState } from "react";
import './Body.css'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CircularProgress from "@material-ui/core/CircularProgress";


function Body() {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      var src1 = URL.createObjectURL(e.target.files[0]);
      var preview1 = document.getElementById("image-1-preview");
      preview1.src = src1;
      preview1.style.display = "block";
    }
  };
    
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
            <div classname="post">
           <div className="postText"> Create a post </div>
                    <img src={require("../../../Assests/notes.png").default}  className="notes"></img>
                       
            
                    <textarea className="postWriting" rows ="6" 
                    value={caption}
                    placeholder="Enter a caption..."
                    onChange={(e) => setCaption(e.target.value)}>

                    </textarea>
              <div>
              <div className="imagePreview">
              
              
                <CircularProgress
                  className="circularProgress"
                  variant="determinate"
                 
                />
             
            </div>
          </div>

          <div className="imageUpload__bottom">
            <div className="image-upload">
              <label htmlFor="file-input">
                <CameraAltIcon style={{ marginTop: "5px" , marginLeft:'150px' }} />
              </label>

              <input
                id="file-input"
                type="file"
                accept="image/*"
                onChange={handleChange}
              />
            </div>
            <button
              className="button1"
            
              style={{
                color: caption ? "black" : "grey",
                fontWeight: caption ? "600" : "500",
              }}
            >
              Upload
            </button>
              </div>

            </div>
        </div>
    )
}

export default Body
