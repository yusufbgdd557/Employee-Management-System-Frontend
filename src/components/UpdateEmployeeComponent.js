import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const UpdateEmployeeComponent = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [searchParams] = useSearchParams();
    const [id, setId] = useState(null);

    useEffect(() => {
        const paramId = searchParams.get('id') ? searchParams.get('id') : null;
        if(!paramId) {
            return;

        }
        setId(paramId);
        EmployeeService.getEmployeeById(paramId).then((res) => {
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmail(employee.email);
        });
    }, [setId]);

    const updateEmployee = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            toast.warn("Error fields can not be empty!");
            return;
        }

        let employee = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        EmployeeService.updateEmployee(employee, id).then(res => {
            toast.success("Successfully updated!");
            window.location.href = '/employees';
        });
    };

    const cancel = (e) => {
        e.preventDefault();
        window.location.href = '/employees';
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h3 className='text-center'> Update Employee </h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> First Name: </label>
                                    <input
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <label> Last Name: </label>
                                    <input
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <label> Email: </label>
                                    <input
                                        placeholder="Email Address"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={updateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComponent;
