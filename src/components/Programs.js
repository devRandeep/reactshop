import React from 'react';
import Footer from './Footer';
import { useState } from 'react';

export default function Programs() {
	
	
  return (
   <>
    	<div className="tank-temprature-heading">			
			<h2><button  type="submit" value="submit" className="arrow_left"></button>Program 1 of 7<button  type="submit" value="submit"  							className="arrow_left"></button></h2>
		</div>		
		<div className="temprature_status">	
			<div className="status-panel">
			<h4>Temperature Set point : (0 - 220F max) </h4>
			<input type="textbox" name=""  className="value-box" />
			</div>
			<div className="status-panel">
			<h4>use military style time ie 08301640</h4>
			<h6>On Time:</h6> 
				<div className="value-box-panel">
				<input type="textbox" name="" placeholder="hour"  className="value-box" />
				<input type="number" name="" placeholder="min" className="value-box"/>	
				</div>		
				<h6>Off Time: </h6>
				<div className="value-box-panel">
				<input type="textbox" name="" placeholder="hour" className="value-box"  />
				<input type="textbox" name="" placeholder="min" className="value-box"  />
				</div>			
			</div>
			<div className="week-status">
				<ul>
					<li><input type="checkbox" />Sun</li>
					<li><input type="checkbox" />Mon</li>
					<li><input type="checkbox" />Tue</li>
					<li><input type="checkbox" />Wed</li>
				</ul>
				<ul>
					<li><input type="checkbox" />Thu</li>
					<li><input type="checkbox" />Fri</li>
					<li><input type="checkbox" />Sat</li>
				</ul>
			</div>				
		</div>
		<div className="app-status"><h3>Status</h3></div>
		<div className="app-mode-box">
			<div className="box-mode box-1 one_box">
				<p>Heater </p>
				<span>OFF -  Cooling</span>
			</div>			
		</div>	
		<div className="bottom-button">
			<button className="app-button">Save</button>
			<button className="app-button">Clear</button>
		</div>
		<div className="red-color-bar">
			<line></line>
		</div>
   </>
   
  );

}
