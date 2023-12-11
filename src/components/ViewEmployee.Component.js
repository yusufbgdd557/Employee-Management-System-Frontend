import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useSearchParams } from 'react-router-dom';


const ViewEmployeeComponent = (props) => {

    const [employee, setEmployee] = useState({});
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const paramId = searchParams.get('id') ? searchParams.get('id') : null;
        if (!paramId) {
            return;
        }
        const fetchEmployee = async (id) => {
            try {
                const res = await EmployeeService.getEmployeeById(id);
                setEmployee(res.data);
            } catch (error) {
                console.error('Error fetching employee:', error);
            }
        };

        fetchEmployee(paramId);
    }, []);
    
    const tableStyle = {
        width: '50%',
        margin: '0 auto',
        marginTop: '20px',
      };

    return (
        <table className="table table-bordered" style={tableStyle}>
        <thead className="thead-dark">
          <tr>
            <th colSpan="2" className="text-center">
            <button className="btn btn-secondary" onClick={() => window.location.href="/employees"} style={{float: 'left'}}>Back</button>
              Employee Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Employee First Name:</td>
            <td>{employee.firstName}</td>
          </tr>
          <tr>
            <td>Employee Last Name:</td>
            <td>{employee.lastName}</td>
          </tr>
          <tr>
            <td>Employee Email:</td>
            <td>{employee.email}</td>
          </tr>
        </tbody>
      </table>
    );
};

export default ViewEmployeeComponent;
