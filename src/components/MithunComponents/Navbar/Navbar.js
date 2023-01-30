import React,{useEffect} from 'react';
import './Navbar.css';
import LOGO from './LOGO.png';
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);
const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 0){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  const navigate=useNavigate();
  const btn = ()=>{
    navigate("./Mypins");
  }
  const bt = ()=>{
    navigate("./");
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
let navbarClasses=['navbar'];
  if(scrolled){
    navbarClasses.push('scrolled');
  }
    return (
        <div className="Navbar">
        <img src={LOGO} alt=""></img>
        <ul>
            <li onClick={bt}><a href=" ">Home</a></li>
            <li onClick={btn}><a href=" ">Mypins</a></li>
            
            <li><FiSearch className='icon' /></li>
            <li><FaRegUser className='icon'/></li>
        </ul>
      </div>
    )
  };
  export default Navbar;