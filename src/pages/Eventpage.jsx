import React from 'react';
import '../App.css';
import Bannerf from '../components/Bannerf';
import Container2 from '../components/Container2';
import Container3 from '../components/Container3';
import Cards from '../components/Cards';
import img from '../images/newvibes.jpeg';


import Navbar from '../components/MithunComponents/Navbar/Navbar';

export const Eventpage = () => {
  return (
    <>
    <Navbar/>
    <Bannerf img={img}/>
            <Container2 
            Name="New Year New Vibes"
            content="To begin a new year with a DJ party, A dream way to start a new year right? Come join with us and begin your new year in style To begin a new year with a DJ party, A dream way to start a new year right? Come join with us and begin your new year in style To begin a new year with a DJ party, A dream way to start a new year right? Come join with us and begin your new year in style To begin a new year with a DJ party, A dream way to start a new year right? Come join with us and begin your new year in style"
            />
            <Container3 ue="Other Events" />
            <Cards 
                day={13}
                mon="Jan"
                yr={2023}
                time="10:00AM"
                title="Naatu Koothu"
            />
            <Cards 
                day={14}
                mon="Feb"
                yr={2023}
                time="07:00PM"
                title="Valentenia"
            />
            <div className='backDesign'></div>
            <div className='leftDesign'></div>
    
    </>
    );
};

export default Eventpage;

