import React from 'react'
import img from '../images/Danceclub.jpeg';
import '../index.css';


function Bannerf({img}) {
  return (
    <div className="Banner">
        {/* <img src={banner}/> */}
        <img src={img}/>
    </div>
  )
}


export default Bannerf
