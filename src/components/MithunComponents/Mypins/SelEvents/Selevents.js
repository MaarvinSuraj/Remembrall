import React from 'react';
import './Selevents.css';
import image1 from '../../../Images/events1.png';
import image2 from '../../../Images/events2.png';
import image3 from "../../../Images/events3.png";
import image4 from "../../../Images/events4.png";
import image5 from "../../../Images/events5.png";
import image6 from "../../../Images/events6.png";

const Selevents=()=>{
    return(
        <div className="Selevents">
          <p>Events</p>
          <div className="serect"></div>
          <div className='Selevents-img'>
            
            <div className='seimage'>
              <img src={image1} alt=''/>
            </div>
            <div className='seimage'>
              <img src={image2} alt=''/>
            </div>
            <div className='seimage'>
              <img src={image3} alt=''/>
            </div>
            <div className='seimage'>
              <img src={image4} alt=''/>
            </div>
            <div className='seimage'>
              <img src={image5} alt=''/>
            </div>
            <div className='seimage'>
              <img src={image6} alt=''/>
            </div>
         
          </div>
        </div>
        )
};
export default Selevents;