import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="login_parent_div">
      <div className="login_child_div">
        <h1 className="signInHere">Register Now!</h1>
        <p>Join the setSail community today & set up a free account</p>
        <div className="login_input_div">
          <input type="name" placeholder="User Name" />
          <br />
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <span className="login_checkBox">
          <input type="checkbox" name="rememberme" id="" />
          <label htmlFor="rememberme">Remember Me</label>
        </span>

        <button className="signIn_btn">Register</button>
        <p className="are_you">
          Already have an account?&nbsp;
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
