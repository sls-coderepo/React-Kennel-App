import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          
          <h3>Name: <span className="card-EmployeeName">Shirish</span></h3>
          <p>Title: Software Developer</p>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;