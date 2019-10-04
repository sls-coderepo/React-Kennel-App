import React, {Component} from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationForm extends Component {
    state = {
        locationName:"",
        breed:"",
        locationStatus: false
    }


handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
}

constructNewLocation = evt => {
    evt.preventDefault();
    if(this.state.locationName === "" || this.state.breed === "") {
        window.alert("Field is Required")
    }
    else {
        this.setState({loadingStatus: true})
        const location = {
            name: this.state.locationName,
            breed: this.state.breed
        }
        LocationManager.post(location).then(() => this.props.history.push('/locations'))
    }
}

render (){
    return (
        <>
        <form>
            <fieldset>
                <div className='formgrid'>
                    <input type='text' required onChange={this.handleFieldChange} id='locationName' placeholder='Location' />
                    <label htmlFor='locationName'>Location</label>
                    <input type='text' required onChange={this.handleFieldChange} id='breed' placeholder='Breed' />
                    <label htmlFor='breed'>Breed</label>
                </div>
                <div className='alignRight'>
                    <button disabled={this.state.loadingStatus} onClick={this.constructNewLocation}>Submit</button>
                </div>
            </fieldset>
        </form>
        </>
    )
}
}

export default LocationForm
