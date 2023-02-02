import React, { useState } from "react";
import { Link, } from 'react-router-dom';
import "./loginstyles.css";
import gi from "../../images/Vector.png";
import logo from '../../images/LOGO.png';


function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Send login request to server here
    console.log("Username:", userName);
    console.log("Password:", password);
  }

  return (
    <>
    <div className="backdesign"></div>
    <div className="leftdesign"></div>
    <div className="rightdesign"></div>
    <div className="llogo">
        <img className="llogo-img" src={logo} alt="applogo" />
    </div>
    <div className="center">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <div className="txt-field">
          <input
            type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <label>Username</label>
          <span></span>
      </div>
      <div className="txt-field">
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label>Password</label>
        <span></span>
      </div>
      <Link to="/Home"><button type="submit" >Login</button></Link> 
      <div className="or">
        <hr className="lefts"></hr>
        OR
        <hr className="rights"></hr>
      </div>
      <div className="google-signup">
        <Link className="g-l">Log in with Google account</Link>
        <img src={gi} alt="google logo" />
      </div>
      <p className="sign">
        Don't have an account? <Link className="s-l" to="/Signup">Sign up</Link>
      </p>
    </form>
    </div>
    </>
    
  );
}

export default LoginPage;

