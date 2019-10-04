import React, {Component} from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName:"",
        locationStatus:false
    }

    handleFieldChange = e => {
        const stateToChange = {};
        stateToChange[e.target.id] = e.target.value;
        this.setState(stateToChange)
    }

    constructNewOwner = e => {
        e.preventDefault();
        if(this.state.OwnerName === ""){
            window.alert("Field is Required")
        }
        else {
            this.setState({locationStatus: true})
            const owner = {
                name: this.state.ownerName
            }
            OwnerManager.post(owner).then(() => this.props.history.push('/owners'))
        }
    }

    render(){
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input type="text" required onChange={this.handleFieldChange} id="ownerName" placeholder="Owner"></input>
                        <label htmlFor="ownerName">Owner Name</label>
                    </div>
                    <div className="alignRight">
                        <button disabled={this.state.locationStatus} onClick={this.constructNewOwner}>Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default OwnerForm
