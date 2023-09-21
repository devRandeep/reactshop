import React from 'react';
import Footer from './Footer';

export default function Ioconfig() {
  return (
   <>
    <div className="tank-temprature-heading">			
			<h2><span className="left_button">I/O Aux Outputs Config</span></h2>

		</div>		
		<div className="temprature_status">
			<div className="status-panel">
			<h4>Fill Relay Status</h4>
			<h6>OFF</h6>
			</div>
			<div className="status-panel">
			<h4>Drain Relay Status</h4>
			<h6>OFF - Drain Closed</h6>			
			</div>
			<div className="status-panel">
			<h4>User Controlled Relay Output 1:</h4>
			<h6>Select operation for user Relay 1:</h6>			
			</div>
			<div className="status-panel">
				<figure><input type="radio" name="trun"/    >Turn On when tank reaches SET POINT</figure>
				<figure><input type="radio" name="trun"/>Turn On for this schedule: </figure>				
				<div className="value-box-panel">
				<input type="textbox" placeholder="On Time " className="value-box" />				
				<input type="textbox" placeholder="OFF Time" className="value-box" />				
				</div>	
				<figure><input type="radio" name="trun"/>Turn On when Tank Level is Full</figure>
				<figure><input type="radio" name="trun"/>Turn On for ANY Heater Safety Shutdown</figure>
			</div>
			<div className="status-panel">
			<h4>User Conrolled Relay output 2:</h4>
			<h6>Select operation for user Relay 2:</h6>			
			</div>
			<div className="status-panel">
				<figure><input type="radio" name="trun"/>Trun On when tank reaches SET Point </figure>
				<figure><input type="radio" name="trun"/>Turn on for this schedule: </figure>
				<div className="value-box-panel">
				<input type="textbox" placeholder="On Time" className="value-box" />				
				<input type="textbox" placeholder="OFF Time" className="value-box" />				
				</div>	
				<figure><input type="radio" name="trun"/>Turn On for ANY Heater Safety Shutdown </figure>

			</div>


		</div>

	
		<div className="app-status"><h3>Status</h3></div>
		<div className="app-mode-box">
			<div className="box-mode box-1 one_box">
				<p>Heater </p>
				<span>OFF -  Cooling</span>
			</div>			
		</div>		
		<div className="red-color-bar">
			<line></line>
		</div>
		
   </>
  );
}
