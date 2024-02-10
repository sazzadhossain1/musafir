import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login_parent_div">
      <div className="login_child_div">
        <h1 className="signInHere">Sign In Here!</h1>
        <p>Log into your account in just a few simple steps</p>
        <div className="login_input_div">
          <input type="name" placeholder="User Name" />
          <br />
          <input type="password" placeholder="Password" />
        </div>
        <span className="login_checkBox">
          <input type="checkbox" name="rememberme" id="" />
          <label htmlFor="rememberme">Remember Me</label>
        </span>
        <Link>
          <p className="password_reset">Lost Your Password?</p>
        </Link>

        <button className="signIn_btn">Sign In</button>
        <p className="are_you">
          Are you new here?&nbsp;
          <Link to="/signUp">Please Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
