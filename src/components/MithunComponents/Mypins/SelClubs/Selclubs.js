import React from 'react';
import './Selclubs.css';
import image1 from '../../../../images/clubs1.png';
import image2 from '../../../../images/clubs2.png';
import image3 from "../../../../images/clubs3.png";
import image4 from "../../../../images/clubs4.png";
import image5 from "../../../../images/clubs5.png";
import image6 from "../../../../images/clubs6.png";
import { useNavigate } from 'react-router-dom';
const Selclubs=()=>{
  const navigate=useNavigate();
  
  const bt = ()=>{
    navigate("/Clubpage");
  }
      return(
        <div className="Selclubs">
          <p>Clubs</p>
          <div className="srect"></div>
          <div className='Selclubs-img'>
            <div className='img' onClick={bt}>
              <img src={image1} alt=''/>
            </div>
            <div className='img' onClick={bt}>
              <img src={image2} alt=''/>
            </div>
            <div className='img' onClick={bt}>
              <img src={image3} alt=''/>
            </div>
            <div className='img' onClick={bt}>
              <img src={image4} alt=''/>
            </div>
            <div className='img' onClick={bt}>
              <img src={image5} alt=''/>
            </div>
            <div className='img' onClick={bt}>
              <img src={image6} alt=''/>
            </div>
          </div>
        </div>
        )
};
export default Selclubs;