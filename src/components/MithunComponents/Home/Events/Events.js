import React from 'react';
import './Events.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../../images/Images/events1.png';
import image2 from '../../../images/Images/events2.png';
import image3 from "../../../images/Images/events3.png";
import image4 from "../../../images/Images/events4.png";
import image5 from "../../../images/Images/events5.png";
import image6 from "../../../images/Images/events6.png";

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
    return(
        <div className="Events">
          <p>Events</p>
          <div className="rect"></div>
          <div className='events-img'>
            <Slider {...settings}>
            <div className='eimage'>
              <img src={image1} alt=''/>
            </div>
            <div className='eimage'>
              <img src={image2} alt=''/>
            </div>
            <div className='eimage'>
              <img src={image3} alt=''/>
            </div>
            <div className='eimage'>
              <img src={image4} alt=''/>
            </div>
            <div className='eimage'>
              <img src={image5} alt=''/>
            </div>
            <div className='eimage'>
              <img src={image6} alt=''/>
            </div>
          </Slider>
          </div>
        </div>
        )
};
export default Events;