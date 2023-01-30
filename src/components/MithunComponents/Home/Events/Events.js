import React from 'react';
import './Events.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import image1 from '../../../../images/events1.png';
import image2 from '../../../../images/events2.png';
import image3 from "../../../../images/events3.png";
import image4 from "../../../../images/events4.png";
import image5 from "../../../../images/events5.png";
import image6 from "../../../../images/events6.png";

const Events=()=>{
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
  const btn = ()=>{
    navigate("/Eventpage");
  }
    return(
        <div className="Events">
          <p>Events</p>
          <div className="rect"></div>
          <div className='events-img' >
            <Slider {...settings}>
            <div className='eimage' onClick={btn}>
              <img src={image1} alt=''/>
            </div>
            <div className='eimage' onClick={btn}>
              <img src={image2} alt=''/>
            </div>
            <div className='eimage' onClick={btn}>
              <img src={image3} alt=''/>
            </div>
            <div className='eimage' onClick={btn}>
              <img src={image4} alt=''/>
            </div>
            <div className='eimage' onClick={btn}>
              <img src={image5} alt=''/>
            </div>
            <div className='eimage' onClick={btn}>
              <img src={image6} alt=''/>
            </div>
          </Slider>
          </div>
        </div>
        )
};
export default Events;