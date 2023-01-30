import React from 'react';
import './Selevents.css';
import image1 from '../../../../images/events1.png';
import image2 from '../../../../images/events2.png';
import image3 from "../../../../images/events3.png";
import image4 from "../../../../images/events4.png";
import image5 from "../../../../images/events5.png";
import image6 from "../../../../images/events6.png";
import { useNavigate } from 'react-router-dom';

const Selevents=()=>{
  const navigate=useNavigate();
  
  const bt = ()=>{
    navigate("/Eventpage");
  }
    return(
        <div className="Selevents">
          <p>Events</p>
          <div className="serect"></div>
          <div className='Selevents-img'>
            
            <div className='seimage' onClick={bt}>
              <img src={image1} alt=''/>
            </div>
            <div className='seimage' onClick={bt}>
              <img src={image2} alt=''/>
            </div>
            <div className='seimage' onClick={bt}>
              <img src={image3} alt=''/>
            </div>
            <div className='seimage' onClick={bt}>
              <img src={image4} alt=''/>
            </div>
            <div className='seimage' onClick={bt}>
              <img src={image5} alt=''/>
            </div>
            <div className='seimage' onClick={bt}>
              <img src={image6} alt=''/>
            </div>
         
          </div>
        </div>
        )
};
export default Selevents;