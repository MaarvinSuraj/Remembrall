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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbarf() {



    return (
        <div className='container'>
            <div className='navbar'>
                <img className='logo' src={logo} />
                <nav>
                    <ul>
                        <li className="navele"><a href="#">Home</a></li>
                        <li class="navele"><a>My Events</a></li>
                        <li className="navele"><a><FiSearch className="search" /></a></li>
                        <li className="navele"><a><FiBookmark className="bookmark" /></a></li>
                        <li className="navele"><a><FaRegUser className="profile" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbarf