import React from 'react'
import Clubs from './Clubs/Clubs'
import Events from './Events/Events'
import './Home.css';

function Home() {
  return (
    <div className='Home'>
        <Clubs />
        <Events />
        
    <div className="rect1"></div>
    <div className="rect2"></div>
    </div>
  )
}

export default Home