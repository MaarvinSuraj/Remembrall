import React from 'react';
import './Clubs.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../../../images/clubs1.png";
import image2 from '../../../../images/clubs2.png';
import image3 from "../../../../images/clubs3.png";
import image4 from "../../../../images/clubs4.png";
import image5 from "../../../../images/clubs5.png";
import image6 from "../../../../images/clubs6.png";
import { useNavigate } from 'react-router-dom';
const Clubs=()=>{
  const settings = {
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
  };
  const navigate=useNavigate();
  
  const bt = ()=>{
    navigate("/Clubpage");
  }
      return(
        <div className="Clubs">
          <p>Clubs</p>
          <div className="crect"></div>
          <div className='clubs-img'>
            <Slider {...settings}>
            <div className='image' onClick={bt}>
              <img src={image1} alt=''/>
            </div>
            <div className='image' onClick={bt}>
              <img src={image2} alt=''/>
            </div>
            <div className='image' onClick={bt}>
              <img src={image3} alt=''/>
            </div>
            <div className='image' onClick={bt}>
              <img src={image4} alt=''/>
            </div>
            <div className='image' onClick={bt}>
              <img src={image5} alt=''/>
            </div>
            <div className='image' onClick={bt}>
              <img src={image6} alt=''/>
            </div>
          </Slider>
          </div>
        </div>
        )
};
export default Clubs;