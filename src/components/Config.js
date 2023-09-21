import React from 'react';

export default function Config() {
  return (
    <>
    <div className="tank-temprature-heading">			
			<h2>Configuration</h2>
		</div>		
		<div className="temprature_status">
			<div className="status-panel">
			<h4>Device Name : </h4>
			<div className="value-box-panel">
				<input type="textbox" placeholder="Device Name " className="value-box" />				
			</div>
			</div>
			<div className="status-panel">
				<h4>Tank Liquid Level Control:</h4>
				<figure><input type="radio" name="trun" />Auto</figure>
				<figure><input type="radio" name="trun" />External</figure>
				<figure><input type="radio" name="trun" />Off</figure>
			</div>	
			<div className="status-panel">
				<h4>Auto / Manual Mode:</h4>
				<figure><input type="radio" name="Manual" />Auto</figure>
				<figure><input type="radio" name="Manual" />Manual</figure>
				<figure><input type="radio" name="Manual" />Off</figure>
			</div>	
			<div className="status-panel">
			<h3>Blue Manual Button Function</h3>
			<p>When PT Heater is on:</p>

			<figure><input type="radio" name="off" />Do nothing</figure>
			<figure><input type="radio" name="off" />Turn OFF until next event</figure>
			<figure><input type="radio" name="off" />Turn OFF for specific time</figure>
			<div className="value-box-panel">
				<input type="textbox" placeholder="hour" className="value-box" />
				<input type="textbox" placeholder="min" className="value-box" />
			</div>
			<br />
			<p>When PT Heater is OFF:</p>
			<figure><input type="radio" name="on" />Do nothing</figure>
			<figure><input type="radio" name="on" />Turn ON until next event</figure>
			<figure><input type="radio" name="on" />Turn ON for specific time</figure>
			<div className="value-box-panel">
				<input type="textbox" placeholder="hour" className="value-box" />
				<input type="textbox" placeholder="min" className="value-box" />
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
