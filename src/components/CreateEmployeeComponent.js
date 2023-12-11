import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';

const CreateEmployeeComponent = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const changeFirstNameHandler = (event) => {
    setState({ ...state, firstName: event.target.value });
  };

  const changeLastNameHandler = (event) => {
    setState({ ...state, lastName: event.target.value });
  };

  const changeEmailHandler = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();

    if (!state.firstName || !state.lastName || !state.email) {
      toast.warn('All fields required!');
      return;
    }

    const employee = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
    };

    try {
      await EmployeeService.createEmployee(employee);
      toast.success('Successfully saved!');
      setTimeout(() => {
        window.location.href = '/add-employee';
      }, 3000);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
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
            <h3 className='text-center'> Add Employee </h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label> First Name: </label>
                  <input
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={state.firstName}
                    onChange={changeFirstNameHandler}
                  />
                  <label> Last Name: </label>
                  <input
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    value={state.lastName}
                    onChange={changeLastNameHandler}
                  />
                  <label> Email: </label>
                  <input
                    placeholder='Email Address'
                    name='email'
                    className='form-control'
                    value={state.email}
                    onChange={changeEmailHandler}
                  />
                </div>
                <button className='btn btn-success' onClick={saveEmployee}>
                  Save
                </button>
                <button className='btn btn-danger' onClick={cancel} style={{ marginLeft: '10px' }}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
