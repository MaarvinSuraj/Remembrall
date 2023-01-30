import React from 'react'
import Clubs from './Clubs/Clubs'
import Events from './Events/Events'
import './Home.css';
import Navbar from '../Navbar/Navbar';

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Clubs />
        <Events />
        
    <div className="rect1"></div>
    <div className="rect2"></div>
    </div>
  )
}

export default Home