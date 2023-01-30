import React from 'react';
import './Clubs.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../../../images/Images/clubs1.png';
import image2 from '../../../images/Images/clubs2.png';
import image3 from "../../../images/Images/clubs3.png";
import image4 from "../../../images/Images/clubs4.png";
import image5 from "../../../images/Images/clubs5.png";
import image6 from "../../../images/Images/clubs6.png";
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
      return(
        <div className="Clubs">
          <p>Clubs</p>
          <div className="rect"></div>
          <div className='clubs-img'>
            <Slider {...settings}>
            <div className='image'>
              <img src={image1} alt=''/>
            </div>
            <div className='image'>
              <img src={image2} alt=''/>
            </div>
            <div className='image'>
              <img src={image3} alt=''/>
            </div>
            <div className='image'>
              <img src={image4} alt=''/>
            </div>
            <div className='image'>
              <img src={image5} alt=''/>
            </div>
            <div className='image'>
              <img src={image6} alt=''/>
            </div>
          </Slider>
          </div>
        </div>
        )
};
export default Clubs;