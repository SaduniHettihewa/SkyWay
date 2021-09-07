import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
          <div className="buttondiv">
            <button type="submit" className="Loginbutton"  onClick={() => history.push("/Dashboard")}>
              Login
            </button>
          </div>
          <div>
            <lable className="account" > Don't have an account ?
              <Link to="/Signup" className="SignupLink"> SignUp </Link></lable>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login
