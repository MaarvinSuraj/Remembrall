import React from 'react'
import Selclubs from './SelClubs/Selclubs'
import Selevents from './SelEvents/Selevents'
import  './Mypins.css'

function Mypins() {
  return (
    <div className="Mypin">
        <Selclubs/>
        <Selevents/>
        <div className="prect1"></div>
        <div className="prect2"></div>
    </div>
  )
}

export default Mypins