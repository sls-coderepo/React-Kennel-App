import React, { Component } from 'react';

class OwnerCard extends Component {
	render() {
		return (
			<div className='card'>
				<div className='card-content'>
		
					<h3>
						Owner: <span className='card-ownerename'>{this.props.owner.name}</span>
					</h3>
					<button type='button' onClick={() => this.props.deleteOwner(this.props.owner.id)}>
						DELETE
					</button>
				</div>
			</div>
		);
	}
}

export default OwnerCard;