//import React from 'react';
import { NavLink } from 'react-bootstrap';
import Logo from "./img/Amazon_logo.svg.png";
import Moment from 'moment';
// import Logo from 'https://www.processtechnology.com/storage/logo.png';

export default function Header() { 
    const formatDate = Moment().format("DD MMM YYYY");
    const formatTime = Moment().format("HH:mm:ss A");
    const logoWidth = {
        width:'100px'
    };
  return (
    <div>
     {/* <div className="logo"><NavLink exact to="/"><img src={Logo} alt="Logo"/></NavLink></div> */}
		<div className="date-time"><p style={{fontWeight:'800'}}>{formatDate} | <span>{formatTime}</span></p></div>
		<div className="app-heading">			
		<img src={Logo}	style={logoWidth}/>	
		</div>
    </div>
  );
}
