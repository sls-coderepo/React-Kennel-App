import React, { Component } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";
// import "./location.css";

class LocationList extends Component {
	//define what this component needs to render
	state = {
		locations: []
	};

	deleteLocation = id => {
		LocationManager.delete(id).then(() => {
			LocationManager.getAll().then(data => {
				this.setState({
					locations: data
				});
			});
		});
	};

	componentDidMount() {
		console.log("LOCATION LIST: ComponentDidMount");
		//getAll from LocationManager and hang on to that data; put it in state
		LocationManager.getAll().then(locations => {
			this.setState({
				locations: locations
			});
		});
	}

	render() {
		console.log("LOCATION LIST: Render");

		return (
			<>
			<div>
				<button type='button' className="btn" onClick={() => {
						this.props.history.push('/locations/new');}}>Add Location
				</button>
			</div>
			<div className='container-cards'>
				{this.state.locations.map(location => (
					<LocationCard
						key={location.id}
						location={location}
						deleteLocation={this.deleteLocation}
					/>
				))}
			</div>
			</>
		);
	}
}

export default LocationList;