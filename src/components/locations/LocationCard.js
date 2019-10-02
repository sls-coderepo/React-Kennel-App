import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>Address: <span className="card-LocationName">422 Valley Spring Dr</span></h3>
          <p>Mt. Juliet, TN 37122</p>
        </div>
      </div>
    );
  }
}

export default LocationCard;