import React from 'react'
import '../App.css';
import Bannerf from '../components/Bannerf';
import Container2 from '../components/Container2';
import Container3 from '../components/Container3';
import { Link } from "react-router-dom";
import Eventpage from './Eventpage';
import Cards from '../components/Cards';


function Clubpage() {
  return (<>
            <Bannerf />
            <Container2 
            Name="Dance Club"
            content="The motto of the Dance Club is to nurture the talent, celebrate the diversity and give expressions to the creativity of young minds. It encourages students to participate in various inter and intra college dance competitions. The club is actively involved in organizing various dance competitions in the college. This club makes the students to adapt creative, fun and easy way of learning dance. Dance club keeps the students to be fit, socialise and learning skills through dance. Students participated in other colleges and also brought laurels for the college."
            />
            <Container3 
            ue="Upcoming events"/>
            <Cards 
            day={1}
            mon="Jan"
            yr={2020}
            time="00:00AM"
            title="New year New Vibes"
            />
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
            </> )
}

export default Clubpage