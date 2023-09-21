import React from "react";



class Api extends React.Component {
	// Constructor
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			DatailsLoaded: false
		};
	}
	componentDidMount() {
		fetch(
			"https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() { 
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h3> Please wait for some time.... </h3> </div>;
		return (
			<div className="App">
				{items.map((item
				) => (
					<div className="status-panel ip_panel">
						<ol key={item.id} >
							<li><h4><b>Name:</b> {item.name},</h4></li>
							<li><b>Email: </b>{item.email},</li>
							<li><b>Roll No:</b> {item.id},</li>
						</ol>
					</div> 
				))
			}
			</div> 
		);
	}
}

export default Api;
