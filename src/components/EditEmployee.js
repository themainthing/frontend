import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
    const [employee, setEmployee] = useState({ name: '', surname: '', login: '' });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/tracker_war/api/employee/${id}`)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error('Error fetching employee:', error);
            });
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:8080/tracker/api/employee/${id}`, employee)
            .then(response => {
                console.log('Employee updated:', response.data);
                // Redirect or show success message
            })
            .catch(error => {
                console.error('Error updating employee:', error);
                // Handle error, show error message, etc.
            });
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <form onSubmit={handleSubmit}>


                <label>
                    Name:
                    <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" value={employee.surname} onChange={handleInputChange} />
                </label>
                <label>
                    Login:
                    <input type="text" name="login" value={employee.login} onChange={handleInputChange} disabled />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditEmployee;