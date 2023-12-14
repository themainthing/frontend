import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tracker/api/employee')
            .then(response => {
                setEmployees(response.data.employeeList);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Employee List</h2>
            <table class="table-success table table-bordered border-primary table table-sm">
        <thead>
        <tr class="table-danger">
            <th >Name</th>
            <th>Surname</th>
        </tr>
        </thead>
    <tbody>
        {employees.map(employee => (
            <tr key={employee.login}>
                <td>{employee.name}</td>
                <td>{employee.surname}</td>
            </tr>
        ))}
    </tbody>
</table>

        </div>
    );
};

export default EmployeeList;