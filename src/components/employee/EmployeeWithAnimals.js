import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from "../../modules/AnimalManager"

class EmployeeWithAnimals extends Component {
    state = {
      employee: {},
      animals: []
    }

 /*    deleteAnimal = id => {
      AnimalManager.delete(id).then(() => {
        EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
        .then((APIResult) => {
        this.setState({
          employee: APIResult,
          animals: APIResult.animals,
        })
    })
      });
    }; */

    getData = () => {
      EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
        })
    }
    componentDidMount(){
      this.getData();
        //got here now make call to get employee with animal
        /* EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((APIResult) => {
            this.setState({
              employee: APIResult,
              animals: APIResult.animals,
            })
        }) */
    }

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {this.state.animals.map(animal =>
              <AnimalCard
                         key={animal.id}
                         animal={animal}
                        // deleteAnimal={this.deleteAnimal}
                        getData={this.getData}
                        {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;