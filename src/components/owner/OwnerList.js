import React, { Component } from "react";
//import the components we will need
import OwnerCard from "./OwnerCard";
import OwnerManager from "../../modules/OwnerManager";
// import "./owner.css";

class OwnerList extends Component {
	//define what this component needs to render
	state = {
		owners: []
	};

	deleteOwner = id => {
		OwnerManager.delete(id).then(() => {
			OwnerManager.getAll().then(data => {
				this.setState({
					owners: data
				});
			});
		});
	};

	componentDidMount() {
		console.log("OWNER LIST: ComponentDidMount");
		//getAll from OwnerManager and hang on to that data; put it in state
		OwnerManager.getAll().then(owners => {
			this.setState({
				owners: owners
			});
		});
	}

	render() {
		console.log("OWNER LIST: Render");


		return (
			<>
			<div>
				<button type="button" className="btn" onClick={() => {
					this.props.history.push('/owners/new');
				}}>
					Add Owner
				</button>
			</div>
			<div className='container-cards'>
				{this.state.owners.map(owner => (
					<OwnerCard key={owner.id} owner={owner} deleteOwner={this.deleteOwner} />
				))}
			</div>
			</>
		);
	}
}

export default OwnerList;