import React, {Component} from 'react';
import employeeManager from '../../modules/employeeManager';

class EmployeeForm extends Component {
    state = {
        employeeName = '',
        employeeEmail = '',
        loadingStatus = false
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
             window.alert('Please fill your name ans email');
         } else {
             this.setState({loadingStatus: true});
             const employee = {
                 name: this.state.employeeName,
                 email: this.state.employeeEmail
             };

             employeeManager.post(employee).then(() => this.props.history.push('/employees'));
         }
     }
	
 render (){
     return (
         <>
         <form>
             <fieldset>
                 <div className='formgrid'>
                     <input type='text'id='employeeName'></input>
                     <label htmlFor='employeeName'></label>
                     <input type='text' id='employeeEmail'></input>
                     <label htmlFor='employeeEmail'></label>
                 </div>
                 <div className='alignRight'>
                     <button>Submit</button>
                 </div>
             </fieldset>
         </form>
         </>
     )
 }
}