import React from 'react'
import './Billing.css'
import img from './Logo1.jpeg'
import { Link } from 'react-router-dom';
function Bill8() 
{
  return (
    <div className="Bill">
        <h1>InVoice</h1><br></br>
        <h2>Saturn Themepark Private Limited...</h2>
        <br></br>
        <br></br>
        <p>Amount : 6000<br></br>              
              GST+CGST(28%) : 1200<br></br>               
            -------------------<br></br>
             TotalAmount : 7200<br></br>
             -------------------<br></br>
             Have A Safe and Enjoyable Moments!!<br></br>
             With Saturn Themepark PVT.LTD...<br></br>
             Thank You!!!</p><br></br>
            <img src={img} alt="" ></img>
            <br></br>
            <br></br>
            <Link to="/Home"><button>Ok</button></Link>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>
    );
}

export default Bill8;