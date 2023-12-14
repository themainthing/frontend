import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AddTask() {
    const [formData, setFormData] = useState({
        date: '',
        username: '',
        taskname: '',
        startTime: '',
        endTime: '',
        spentTime: '1',
        comments: ''
    });


    const [empdata, setEmpData] = useState(null);
    const [taskdata, setTaskData] = useState(null);


    useEffect(() => {
        const taskapi = 'http://localhost:8080/tracker/api/task';
        const empapi = 'http://localhost:8080/tracker/api/employee';


        const fetchData = async () => {
            try {
                const [response1, response2] = await Promise.all([
                    axios.get(empapi),
                    axios.get(taskapi),
                ]);

                setEmpData(response1.data);
                setTaskData(response2.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const startTime = new Date(`2000-01-01T${formData.startTime}`);
        const endTime = new Date(`2000-01-01T${formData.endTime}`);
        
        // Convert JavaScript Date objects to ISO strings
        const isoStartTime = startTime.toISOString();
        const isoEndTime = endTime.toISOString();
    
        const jsonData = {
            "employeeId": formData.username,
            "taskId": formData.taskname,
            "timeStart": isoStartTime,
            "timeEnd": isoEndTime,
            "comment": formData.comments
        };
        console.log(jsonData);
        try {
            const response = await axios.post('http://34.118.108.223:8080/tracker-1.0-SNAPSHOT/api/time', jsonData);

            
    
            console.log('API response:', response.data);
            
        } catch (error) {
            console.error('Error sending data to API:', error);
           
        }
    };

        


    return (
        <div id="task-box">
            <h2>Add Work</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label >Date:</label>
                    <input
                        type="date"
                        name="date"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Employee name:</label>
                    <select onChange={handleInputChange} name="username">
                        <option>Select Employee</option>
                        {empdata && empdata.employeeList && empdata.employeeList.map(employee => (
                            <option key={employee.id} value={employee.id}>
                                <option>{employee.name}</option>
                            </option>))}
                    </select>
                </div>

                <div>
                    <label>Task Name:</label>
                    <select onChange={handleInputChange} name="taskname">
                        <option> select task</option>
                        {taskdata &&
                            taskdata.taskList &&
                            taskdata.taskList.map((task) => (
                                <option key={task.id} value={task.id}>
                                    {task.description}
                                </option>
                            ))}
                    </select>
                </div>

                <div>
                    <label >Start Time:</label>
                    <input
                        type="time"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label >End Time:</label>
                    <input
                        type="time"
                        name="endTime"
                        onChange={handleInputChange}
                    />
                </div>
                

                <div>
                    <label >Comments:</label>
                    <input
                        type="text"
                        name="comments"
                        onChange={handleInputChange}
                    />
                </div>

                <button id="button" type="submit">Save</button>

            </form>

        </div>
    );


}

