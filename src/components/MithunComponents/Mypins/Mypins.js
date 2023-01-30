import React from 'react'
import Selclubs from './SelClubs/Selclubs'
import Selevents from './SelEvents/Selevents'
import  './Mypins.css'
import Navbar from '../Navbar/Navbar';

function Mypins() {
  return (
    <>
    <Navbar/>
    <div className="Mypin">
        <Selclubs/>
        <Selevents/>
        <div className="prect1"></div>
        <div className="prect2"></div>
    </div>
    </>
  )
}

export default Mypins