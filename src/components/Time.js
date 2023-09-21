import React from 'react';
import Footer from './Footer';

export default function Time() {
  return (
    <>
    <div className="tank-temprature-heading">			
			<h2>Time Setup</h2>

		</div>		
		<div className="temprature_status">
			<div className="status-panel">
			<h3>NTP Network Setup</h3><br />
			<h4>Time Zone</h4>
			<div className="value-box-panel">
				<input type="textbox" placeholder="Time Zone (Hours)" className="value-box" />				
			</div>
			</div>
			<div className="status-panel">
			<h4>Time Server IP: <i>( default 132.163.96.1 )</i></h4>			
			<div className="value-box-panel">
				<input type="textbox" placeholder="132" className="value-box" />				
				<input type="textbox" placeholder="163" className="value-box" />				
				<input type="textbox" placeholder="96" className="value-box" />				
				<input type="textbox" placeholder="1" className="value-box" />				
			</div>
			<div className="bottom-button">
			<button className="app-button">Save</button>			
			</div>
			</div>
			
			<div className="status-panel">
				<h3>Local Time Adjust</h3>
				<div className="value-box-panel">
				<input type="textbox" placeholder="Hour" className="value-box" />				
				<input type="textbox" placeholder="Min" className="value-box" />		
				</div>
				<h4>Date:</h4>
				<div className="value-box-panel">
				<input type="textbox" placeholder="DD" className="value-box" />				
				<input type="textbox" placeholder="MM" className="value-box" />		
				<input type="textbox" placeholder="YYYY" className="value-box" />		
				</div>
			</div>
		</div>
		
		
		<div className="app-status"><h3>Status</h3></div>
		<div className="app-mode-box">
			<div className="box-mode box-1 one_box">
				<p>Heater </p>
				<span>OFF -  Cooling</span>
			</div>			
		</div>
		<div className="temprature_status">
			<div className="status-panel">
				<p>Time last updated 2/05/2022 at 14:36</p>
			</div>
			</div>	
		<div className="bottom-button">
			<button className="app-button">Update Time</button>
			<button className="app-button">Refresh</button>
		</div>

		<div className="red-color-bar">
			<line></line>
		</div>
	
    </>
  );
}
