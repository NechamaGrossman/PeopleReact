import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class PersonForm extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 45 }} >
                <input type="text" onChange={this.props.setFirstName} placeholder="First Name" value={this.props.firstNameValue} />
                <input type="text" onChange={this.props.setLastName} placeholder="Last Name" value={this.props.lastNameValue} />
                <input type="text" onChange={this.props.setAge} placeholder="Age" value={this.props.ageValue} />
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={this.props.addPerson}> Add Person</button>
                    <button className="btn btn-danger" onClick={this.props.clearTable}>clear table</button>
                </div>

            </div>
        )
    }
}
export default PersonForm;
