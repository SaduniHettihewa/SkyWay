import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { usersignup } from "../../API/auth";

const Signup = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (evt) => {
    //evt.preventDefault();
    if (
      isEmpty(firstname) ||
      isEmpty(lastname) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      alert("All fields are required");
      return;
    } else if (!isEmail(email)) {
      alert("Inavalid email");
      return;
    } else if (!equals(password, password2)) {
      alert("Passwords do not match");
      console.log("ss")
      return;
    } else {
      usersignup({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
        .then((response) => {
          console.log("S");
          alert("SignUp success");
        })
        .catch((err) => {
          console.log("Axios signup error: ", err);
        });
    }
  };
  return (
    <div className="Signup">
      <div>
        <img
          src={require("../../Assests/logo.png").default}
          className="SignupLogo"
        ></img>
      </div>

      <div>
        <form className="SignupView" onSubmit={handleSubmit} noValidate>
          <div className="SignupLable">SignUp</div>

          <label htmlFor="email">First Name</label>
          <input
            name="firstname"
            value={firstname}
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="password">Last Name</label>
          <input
            id="lastName"
            name="lastname"
            value={lastname}
            type="text"
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            placeholder="Password must atleast 6 characters"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            id="confirmPassword"
            name="password2"
            value={password2}
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <div className="buttondiv">
            <button type="submit" className="Signupbutton">
              SignUp
            </button>
          </div>
          <div>
            <lable className="account">
              {" "}
              Already have an account ?
              <Link to="/Login" className="SignupLink">
                {" "}
                Login{" "}
              </Link>
            </lable>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
