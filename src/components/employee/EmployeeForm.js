import React, {Component} from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeForm extends Component {
    state = {
        employeeName: '',
        employeeEmail: '',
        loadingStatus:false
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }
    /*  Local method for validation, set loadingStatus, create employee object, invoke the EmployeeManager post method, and redirect to the full employee list
	 */

     constructNewEmployee = evt => {
         evt.preventDefault();
         if(this.state.employeeName === '' || this.state.employeeEmail === '') {
             window.alert('Please fill your name and email');
         } else {
             this.setState({loadingStatus: true});
             const employee = {
                 name: this.state.employeeName,
                 email: this.state.employeeEmail
             };

             EmployeeManager.post(employee).then(() => this.props.history.push('/employees'));
         }
     }
	
 render (){
     return (
         <>
         <form>
             <fieldset>
                 <div className='formgrid'>
                     <input type='text' required onChange={this.handleFieldChange} id='employeeName' placeholder='Name' />
                     <label htmlFor='employeeName'>Name</label>
                     <input type='text' required onChange={this.handleFieldChange} id='employeeEmail' placeholder='Email' />
                     <label htmlFor='employeeEmail'>Email</label>
                 </div>
                 <div className='alignRight'>
                     <button disabled={this.state.loadingStatus} onClick={this.constructNewEmployee}>Submit</button>
                 </div>
             </fieldset>
         </form>
         </>
     )
 }
}

export default EmployeeForm