import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

class PersonRow extends React.Component {

    render() {
        return (
            <tr className={this.props.age >= 65 ? "danger" : "default"} > 
                    <td>{this.props.firstName}</td>
                    <td>{this.props.lastName}</td>
            <td> {this.props.age} </td>
                </tr>
        )
    }
}
export default PersonRow