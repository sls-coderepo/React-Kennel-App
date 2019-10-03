import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeForm from "./employee/EmployeeForm";
import Login from "./auth/Login";

class ApplicationViews extends Component {
  // Check if credentials are in local storage
  //returns true/false
 
  render() {
    return (
      <React.Fragment>
        <Route exact  path="/"  render={props => {
            return <Home />;
          }}
        />
        <Route  exact  path="/animals"  render={props => {
            if (this.props.user) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route  path="/owners"  render={props => {
            if (this.props.user) {
              return <OwnerList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route exact path="/employees"  render={props => {
            if (this.props.user) {
              return <EmployeeList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
            
          }}
        />
        <Route  exact  path="/locations"  render={props => {
            if (this.props.user) {
              return <LocationList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route  exact  path="/animals/:animalId(\d+)"  render={props => {
            console.log(props, parseInt(props.match.params.animalId));
            // Pass the animalId to the AnimalDetailComponent
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          }}
        />
         <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
           return <EmployeeWithAnimals {...props} />
        }} />
        <Route  path="/locations/:locationId(\d+)"  render={props => {
            console.log(props, parseInt(props.match.params.locationId));
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          }}
        />
        <Route  path="/animals/new"  render={props => {
            return <AnimalForm {...props} />;
          }}
        />
        <Route path="/employees/new" render={props => {
          return <EmployeeForm {...props} />;
        }}
        />
        <Route  path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
          }}
        />
        
        {/* //pass the `setUser` function to Login component. */}
        <Route path="/login" render={props => {
           return <Login setUser={this.props.setUser} {...props} />
          }} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
