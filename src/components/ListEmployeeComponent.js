import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { toast } from 'react-toastify';


const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const res = await EmployeeService.getEmployees();
                setEmployees(res);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const viewEmployee = (id) => {
        window.location.href = `/view-employee?id=${id}`;
    };

    const addEmployee = () => {
        window.location.href = '/add-employee';
    };

    const editEmployee = (id) => {
        window.location.href = `/update-employee?id=${id}`;
    };

    const deleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
            setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
            toast.success('Successfully deleted!');
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };


    return (
        <div>
            <h2 className='text-center'>Employee List</h2>
            <div className='row'>
                <button className='btn btn-primary add-button' onClick={addEmployee}>
                    Add Employee
                </button>
            </div>
            <div className='row'>
                <table className='table table-stripe table-bordered'>
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button onClick={() => editEmployee(employee.id)} className='btn btn-info'>
                                        Update
                                    </button>
                                    <button onClick={() => deleteEmployee(employee.id)} className="btn btn-danger" style={{ marginLeft: '7px' }}>
                                        Delete
                                    </button>
                                    <button onClick={() => viewEmployee(employee.id)} className='btn btn-warning' style={{ marginLeft: '7px' }}>
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
