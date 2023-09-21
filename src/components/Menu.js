import React from 'react';
import { NavLink } from 'react-router-dom';
import {cartImage} from './img/shoping-bag.png';
//import {  Link } from "react-router-dom";

export default function Menu() {

  return (
    <>
      <div className="app-menu">
		  {/* Menu Bar */}
			<ul className="app-menu-list">				
				<li ><NavLink exact activeClassName="active_class" to="/">Products </NavLink></li>		
				<li ><NavLink exact activeClassName="active_class" to="/programs">Programs </NavLink></li>		
				<li ><NavLink exact activeClassName="active_class" to="/config">Config  </NavLink></li>		
				<li ><NavLink exact activeClassName="active_class" to="/time">Time  </NavLink></li>		
				<li ><NavLink exact activeClassName="active_class" to="/maint">Maint  </NavLink></li>
				<li ><NavLink exact activeClassName="active_class" to="/alarms">Alarms   </NavLink></li>	
				<li><NavLink exact activeClassName="active_class" to="/ioconfig">I/O Config   </NavLink></li>
				<li><NavLink exact activeClassName="active_class" to="/users">Counter  </NavLink></li>
				<li><NavLink exact activeClassName="active_class" to="/api">Api  </NavLink></li>			
				</ul>	
		</div>
		 {/* Menu Bar */}
    </>
  );
}
