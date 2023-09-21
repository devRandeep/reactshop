import React from 'react';
import Footer from './Footer';

export default function Maint() {
  return (
    <>
    <div className="tank-temprature-heading">			
			<h2>Maintenance</h2>

		</div>		
		<div className="temprature_status">
				<div className="app-status" style={{paddingLeft:"0px"}}><h3>Running Hours</h3></div>
			<div className="status-panel">
			<h4>Heater Hours Total: </h4>
			<h6>0</h6>
			</div>
			<div className="status-panel">
			<h4>Maint Hours since last reset</h4>
			<h6>0</h6>			
			</div>
			<div className="status-panel">
			<h4>Maint Interval Hours</h4>
			<div className="value-box-panel">
				<input type="textbox" placeholder="Maint Interval Hours " className="value-box" />				
			</div>		
			</div>			
		</div>
		<div className="temprature_status">
			<div className="app-status"  style={{paddingLeft:"0px"}}>
				<h3>Drain Cycle</h3>
				<p>Start PT Heater Drain Cycle:</p>
				</div>
			
			<div className="status-panel">
				<figure><input type="radio" name="trun"/>Start Drain Cycle Now</figure>
				<figure><input type="radio" name="trun"/>Stop Drain Cycle</figure>
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
			{/* <button className="app-button">Clear</button> */}
		</div>
		<div className="red-color-bar">
			<line></line>
		</div>
    </>
  );
}
