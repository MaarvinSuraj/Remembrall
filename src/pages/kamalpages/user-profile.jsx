import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import { HiPencilAlt } from 'react-icons/hi';
import "./user-profile-styles.css";
import pfi from '../../images/prof-img.PNG'

function UserProfile(){

    function HandleLogout(event){
        event.preventDefult();
        return(useNavigate("/LoginPage"));
    }

    return(
    <>
    <div className="right-big"></div>
    <div className="right-small"></div>
    <div className="left-big"></div>
    <div className="left-small"></div>
    <div className="prof-box">
        <div className="img-con">
            <img  className="econ" src={pfi} alt="img"/>
        </div>
        <div className="edit-icon">
            <HiPencilAlt className="pen-icon"/>
            </div>
        <div className="top-part">
            <div className="nam-mob">
                <div className="prof-det" >
                    <h1 className="">Name:</h1>
                    <p>Username</p>
                </div>
                <div className="prof-det">
                    <h1 className="">Mobile:</h1>
                    <p>1234567890</p>
                </div>
            </div>
            <div className="dept-yr">
                <div className="prof-det">
                    <h1 className="">Department:</h1>
                    <p>CSE</p>
                </div>
                <div className="prof-det">
                    <h1 className="">Year:</h1>
                    <p>3</p>
                </div>
            </div>
        </div>
        <div>
            <div className="club-heading">
                <h1 className="heading1">CLUBS</h1>
            </div>
            <div className="cl-li">
            <li>Dance Club</li>
            <li>Dance Club</li>
            </div>
        </div>
        <div className="e-c">
            <div className="event-heading">
                <h1 className="heading2">RECENT EVENTS</h1>
            </div>
            <div className="ev-li">
            <li>Event 1</li>
            <li>Event 2</li>
            </div>
        </div>
        <button className="lo-btn" onClick={HandleLogout}>LOGOUT</button>
    </div>
    </>
    );
}
export default UserProfile;