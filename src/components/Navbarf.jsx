// import React from "react";
// import logo from './images/LOGO.png';
// import './index.css';



// function Navbarf() {
//     return 
//     (   
//     <>
//         <div className='container'>
//             <div className='navbar'>
//             <img className='logo' src={logo} />
//             <nav>
//                 <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Events</a></li>
//                 <li><i class="fa-sharp fa-solid fa-magnifying-glass"></i></li>
//                 <li><i class="fa-regular fa-bookmark"></i></li>
//                 <li><i class="fas fa-user-circle"></i></li>
//                 </ul>
//             </nav>
//             </div>
//         </div>
//     </>
//     );

// }

// export default Navbarf;


import React from 'react'
import logo from '../images/LOGO.png';
import '../index.css';
import { FiSearch } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbarf() {
    // const navigate = useNavigate()
    // const btn = () => {
    //     navigate("./Mypins");
    // }
    // const bt = () => {
    //     navigate("./");
    // }


    return ( 
    <div className = 'container' >
        <div className = 'navbar' >
        <img className = 'logo' src = {logo} alt=" "/> 
        <nav >
            <ul >
                <li className = "navele"  > < a href = " " > Home </a></li >
                <li class = "navele"  > <a href = " "> Mypins </a></li >
                <li className = "navele" > <a href = " "> < FiSearch className = "search" /> </a></li >
                <li className = "navele" > <a href = " "> < FiBookmark className = "bookmark" /> </a></li >
                <li className = "navele" > <a href = " "> < FaRegUser className = "profile" /> </a></li >
            </ul> 
        </nav> 
        </div> 
        </div>
    );
}

export default Navbarf