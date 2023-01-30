import React from 'react';
import './Selclubs.css';
import image1 from '../../../Images/clubs1.png';
import image2 from '../../../Images/clubs2.png';
import image3 from "../../../Images/clubs3.png";
import image4 from "../../../Images/clubs4.png";
import image5 from "../../../Images/clubs5.png";
import image6 from "../../../Images/clubs6.png";
const Selclubs=()=>{
      return(
        <div className="Selclubs">
          <p>Clubs</p>
          <div className="srect"></div>
          <div className='Selclubs-img'>
            <div className='img'>
              <img src={image1} alt=''/>
            </div>
            <div className='img'>
              <img src={image2} alt=''/>
            </div>
            <div className='img'>
              <img src={image3} alt=''/>
            </div>
            <div className='img'>
              <img src={image4} alt=''/>
            </div>
            <div className='img'>
              <img src={image5} alt=''/>
            </div>
            <div className='img'>
              <img src={image6} alt=''/>
            </div>
          </div>
        </div>
        )
};
export default Selclubs;