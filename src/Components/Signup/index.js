import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className="Signup">
      <div>
        <img src={require("../../Assests/logo.png").default} className="SignupLogo"></img>
      </div>

      < div  >

        <form className="SignupView" >
          <div className="SignupLable">
            SignUp
          </div>

          <label htmlFor="email">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
          />

          <label htmlFor="password">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="lastName"
          />
           <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
           
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
           
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
           
          />
          <div>
            <button type="submit" className="Signupbutton" >
              SignUp
            </button>
          </div>
          <div>
            <lable className="account" > Already  have an account ? 
          <Link to="/Login" className="SignupLink"> Login </Link></lable>
          </div>
        </form>
      </div>
    </div>

    )
}

export default Signup
