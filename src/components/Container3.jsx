import React from 'react'
import '../index.css';
import Cards from './Cards';

function Container3() {


  return (
    <div className="container3">
        <div className="UE">
            <h2>Upcoming events</h2>
        </div>
        <div className="divBar2"></div>
        <Cards 
            day={1}
            mon="Jan"
            yr={2020}
            time="00:00AM"
            title="New year New Vibes"
        />
        <Cards 
            day={1}
            mon="Jan"
            yr={2020}
            time="00:00AM"
            title="New year New Vibes"
        />
        <Cards 
            day={1}
            mon="Jan"
            yr={2020}
            time="00:00AM"
            title="New year New Vibes"
        />

      </div>
  );
}

export default Container3;