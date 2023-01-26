import React from 'react'
import './App.css';
import Navbarf from './components/Navbarf.jsx';
import Bannerf from './components/Bannerf';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import { Link } from "react-router-dom";
import Myevents from './Myeventspage';

function Clubpage() {
  return (<>
            <Bannerf />
            <Container2 
            clubName="Dance Club"
            content="The motto of the Dance Club is to nurture the talent, celebrate the diversity and give expressions to the creativity of young minds. It encourages students to participate in various inter and intra college dance competitions. The club is actively involved in organizing various dance competitions in the college. This club makes the students to adapt creative, fun and easy way of learning dance. Dance club keeps the students to be fit, socialise and learning skills through dance. Students participated in other colleges and also brought laurels for the college."
            />
            <Container3 />
            <div className='backDesign'></div>
            <div className='leftDesign'></div>
            </> )
}

export default Clubpage