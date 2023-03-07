// import React, { useState } from 'react'
import {React, useState} from 'React';
import './index.css'

const Learn = () => {
        const[start, setStart] = useState();
        function Start () {
                setStart(start+1);
        }
  return (
    <div className="Learn_useState">
        <h1>1</h1>
        <button>Click Here</button>
    </div>
  )
}

export default Learn