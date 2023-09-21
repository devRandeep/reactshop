import React from 'react';
import Footer from './Footer';
export default function Alarms() {
  return (
    <>
    <div class="tank-temprature-heading">			
			<h2>Heat Element Safety TCs Readings:</h2>

		</div>		
		<div class="temprature_status">
			<div class="status-panel">
			<h4>Element 1 : </h4>
			<h6>38 C</h6>
			</div>
			<div class="status-panel">
			<h4>Element 1 :</h4>
			<h6>35 C</h6>			
			</div>
			<div class="status-panel">
			<h4>Element 3 :</h4>
			<h6>34 C</h6>			
			</div>
			<div class="status-panel">
			<h4><i>(Note: Safety Shutdown @ 102C)</i></h4>						
			</div>
		</div>
		<div class="temprature_status">
			<p>When this event occurs in PT Heater send to these emails:</p>

			<div class="status-panel">
				<figure><input type="radio" name="trun"/>Heater Elements Over Temperature - Auto Shutdown</figure>
				<figure><input type="radio" name="trun"/>Heater TCO Trip Over Temperature - Auto Shutdown</figure>
				<figure><input type="radio" name="trun"/>Tank Temp Reached : Alarm Temp:</figure>
				<figure><input type="radio" name="trun"/>Tank Liquid Level Low</figure>
				<figure><input type="radio" name="trun"/>1 or more Heat Elements have failed in heater</figure>
				<figure><input type="radio" name="trun"/>Tank Drain Valve is open</figure>
				<figure><input type="radio" name="trun"/>Main hours Reached for PT Heater</figure>
				
			</div>

		<div class="app-status"style={{paddingLeft:"0px"}}><h3>email Setup</h3></div>
		<div class="status-panel">
			<h4>eMail 1 Recepient:</h4>			
			<div class="value-box-panel">
				<input type="textbox" placeholder="PT Header " class="value-box" />				
			</div>			
			</div>
			<div class="status-panel">
			<h4>eMail 2 Recepient:</h4>
			<div class="value-box-panel">
				<input type="textbox" placeholder="PT Header " class="value-box" />				
			</div>			
			</div>
			<div class="status-panel">
			<h4>eMail 3 Recepient:</h4>
			<div class="value-box-panel">
				<input type="textbox" placeholder="PT Header " class="value-box" />				
			</div>		
			</div>
		</div>


		
		<div class="app-status"><h3>Status</h3></div>
		<div class="app-mode-box">
			<div class="box-mode box-1 one_box">
				<p>Heater </p>
				<span>OFF -  Cooling</span>
			</div>			
		</div>	
		<div class="bottom-button">
			<button class="app-button">Save</button>
			{/* <button class="app-button">Clear</button> */}
		</div>
		<div class="red-color-bar">
			<line></line>
		</div>
		
    </>
  );
}
