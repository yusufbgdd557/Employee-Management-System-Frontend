import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';

class CreateEmployeeComponent extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        }


        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

    }

    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }
    saveEmployee = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName || !this.state.email) {
            toast.warn("All fields required!");
            return;
        }
        
        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        };
    
        console.log('employee => ' + JSON.stringify(employee));
    
        EmployeeService.createEmployee(employee).then(res => {
            toast.success("Successfully saved!");
            window.location.href = '/employees';
        });
    }
    cancel() {
        window.location.href = '/employees';
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'> Add Employee </h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                            <label> Email: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
