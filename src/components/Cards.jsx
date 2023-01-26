import React from 'react'
import '../index.css';
import { useState } from 'react';


function Cards({day, mon, yr, time, title}) {
    const [state, setState] = useState(false);

    const toggle = () => { setState(!state) }
    return (
        <>
            <div className="card1">
                <div class="part">
                    <h1>{day}</h1>
                </div>
                <div class="part partdt">
                    <h4 className="date">{mon},{yr}</h4>
                    <h3 className="time">{time}</h3>
                </div>
                <div class="part">
                    <h2 class="new">{title}</h2>
                </div>
                <div class="part-btn">
                    <button onClick={toggle}
                        className={state ? 'marked-btn1' : 'mark-btn1'}>
                        {state ? 'Marked' : 'Mark'}
                    </button>
                </div>

            </div>
        </>
    )
}
// 1  Jan, 2020.  00:00AM  New year New Vibes
export default Cards;