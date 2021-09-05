import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';

//Login page

function Login() {
  const history = useHistory();
  return (
    <div className="Login">
      <div>
        <img src={require("../../Assests/logo.png").default} className="LoginLogo"></img>
      </div>

      < div  >

        <form className="loginView" >
          <div className="LoginLable">
            Login
          </div>

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <div>
            <button type="submit" className="Loginbutton" >
              Login
            </button>
          </div>
          <div>
            <lable className="account" > Don't have an account ? 
          <Link to="/Signup"> SignUp </Link></lable>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
