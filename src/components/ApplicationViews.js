import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalCard from './animal/AnimalCard'
//only include these once they are built - previous practice exercise
import LocationCard from './locations/LocationCard'
import EmployeeCard from './employees/EmployeeCard'
import OwnerCard from './owners/OwnerCard'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalCard />
        }} />
        <Route path="/locations" render={(props) => {
            return <LocationCard />
        }}/>
        <Route path="/owners" render={(props) => {
            return <OwnerCard />
        }} />
        <Route path="/employees" render={(props) => {
            return <EmployeeCard />
        }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews