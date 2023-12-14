import React, { useState } from 'react';


const Table = () => {
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState('');
  const [username, setUsername] = useState('');
  const [newTask, setNewTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const addTask = () => {
    if (date && username && newTask && startTime && endTime) {
      setTasks([...tasks, { date, username, task: newTask, startTime, endTime }]);
      setDate('');
      setUsername('');
      setNewTask('');
      setStartTime('');
      setEndTime('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Task Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Username</th>
            <th>Task</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.date}</td>
              <td>{task.username}</td>
              <td>{task.task}</td>
              <td>{task.startTime}</td>
              <td>{task.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mb-3">
        <label htmlFor="dateInput" className="form-label">Date:</label>
        <input
          type="text"
          className="form-control"
          id="dateInput"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="usernameInput" className="form-label">Username:</label>
        <input
          type="text"
          className="form-control"
          id="usernameInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label">Task:</label>
        <input
          type="text"
          className="form-control"
          id="taskInput"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="startTimeInput" className="form-label">Start Time:</label>
        <input
          type="text"
          className="form-control"
          id="startTimeInput"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="endTimeInput" className="form-label">End Time:</label>
        <input
          type="text"
          className="form-control"
          id="endTimeInput"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default Table;
