import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            employees: []
        };
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res });
        });
    }

    addEmployee = () => {
        window.location.href = '/add-employee';
    }
    
    editEmployee = (id) => {
        window.location.href = '/update-employee/${id}';
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className='row'>
                    <button className='btn btn-primary add-button' onClick={this.addEmployee}> Add Employee </button>
                </div>
                <div className='row'>
                    <table className='table table-stripe table-bordered'>
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick = { () => this.editEmployee(employee.id)} className='btn btn-info'> Update </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;