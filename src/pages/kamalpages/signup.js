import React,{useState} from "react";
import "./signupstyles.css";
import { Link } from "react-router-dom";
import gi from "../../images/Vector.png";
import logo from '../../images/LOGO.png';

function Signup(){
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // Send signup request to server here
        console.log("Name:", name);
        console.log("Username:", userName);
        console.log("Password:", password);
        console.log("RePassword:", rePassword);
      }

    return(
        <>
        <div className="backdesign"></div>
        <div className="rightdesign"></div>
        <div className="leftdesign"></div>
        <div className="logo">
            <img src={logo} alt="applogo"/>
        </div>
        <div className="center">
        <h1>Sign up</h1>
            <form onSubmit={handleSubmit} method="post">
                <div className="txt_field">
                    <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label>Name</label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input 
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <label >Username</label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label >Password</label>
                    <span></span>
                </div>
                <div className="txt_field">
                    <input 
                        type="password"
                        value={rePassword}
                        onChange={e => setRePassword(e.target.value)}
                    />
                    <label >Re-enter Password</label>
                    <span></span>
                </div>
                <Link to="/Home">
                <div>
                    <input type="submit" value="Sign up"/>
                </div>
                </Link>
                <div className="or">
                    <hr className="lefts"/>
                    OR
                    <hr className="rights"/>
                </div>
                <div className="google-signup">
                    <Link>Log in with Google account</Link>
                    <img src={gi} alt="google logo" />
                </div>
            </form>
        </div>
        </>
    );
}
 
export default Signup;