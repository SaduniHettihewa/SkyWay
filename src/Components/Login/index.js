import React from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
//Login page

function Login() {
  const history = useHistory();
  return (
    <div className="Login">
      
     
        <img src={require("../../Assests/logo.png").default} className="LoginLogo"></img>
        <div  className="LoginView" >
      <div>
            <lable className="startText" > let's get started ..</lable>
            <div>
            <lable className="smalleText" > Explore your existed travel stories ..</lable>
          </div>
          </div>
          <div className="buttondiv">
            <button type="submit" className="Loginbutton"  onClick={() => history.push("/Dashboard")}>
            <img src={require("../../Assests/google.png").default} className="Google"></img>
            <div className="buttonText">
            Signin with Google
            </div>
             
            </button>
          </div>
         
     </div>
      </div>
  

  )
}

export default Login
