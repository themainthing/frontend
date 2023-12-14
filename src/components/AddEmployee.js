import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [newEmployee, setNewEmployee] = useState({ name: '', surname: '', login: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/tracker/api/employee', newEmployee)
            .then(response => {
                console.log('New employee added:', response.data);
                // Redirect or show success message
            })
            .catch(error => {
                console.error('Error adding new employee:', error);
                // Handle error, show error message, etc.
            });
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" value={newEmployee.surname} onChange={handleInputChange} />
                </label>
                <label>
                    Login:
                    <input type="text" name="login" value={newEmployee.login} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={newEmployee.password} onChange={handleInputChange} />
                </label>
                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;