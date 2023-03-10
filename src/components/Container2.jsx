import React from 'react';
import '../index.css';
import { useState } from 'react';

function Container2({Name,content}) {
    const [state,setState] = useState(false);

    const toggle = () =>{ setState(!state) }

  return (
    <>
        <div className="container2">
            <div class="info">
                <h2 className="clubName">{Name}</h2>
                <nav>
                    <ul>
                        <li><a href=" ">
                            <button onClick={toggle} 
                            className={state ? 'enrolled-btn':'enroll-btn' }>{ state ? 'Enrolled' : 'Enroll' }
                            </button></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="divBar1"></div>
            <p className="content">{content}</p> 
        </div>
         
    </>
  )
}

export default Container2;