import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './PersonForm'
import PersonRow from './PersonRow'
class PeopleTable extends React.Component {
    state = {
        personArray: [],
        firstName: '',
        lastName: '',
        age: '',
    }
    firstNameSet = e => {
        this.setState({ firstName: e.target.value })
    }
    lastNameSet = e => {
        this.setState({ lastName: e.target.value })
    }
    ageSet = e => {
        this.setState({ age: e.target.value })
    }
    addPerson = () => {
        const p = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        const peopleCopy = [...this.state.personArray, p]
        this.setState({ personArray: peopleCopy, firstName: '',lastName:'',age:'' });
    }
    clearTable = () => {
        this.setState({ personArray: [] });
    }
    render() {
        return (
            <div className="row">
                < div className="col-lg-8">
                    <PersonForm
                        addPerson={this.addPerson}
                        setFirstName={this.firstNameSet}
                        setLastName={this.lastNameSet}
                        setAge={this.ageSet}
                        firstNameValue={this.state.firstName}
                        lastNameValue={this.state.lastName}
                        ageValue={this.state.age}
                        clearTable={this.clearTable}
                    />
                    <table className="table  table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.personArray.map((person, i) => <PersonRow firstName={person.firstName} lastName={person.lastName} age={person.age} />)}
                        </tbody>
                    </table>
                </div >
            </div>
        )
    }
}
export default PeopleTable