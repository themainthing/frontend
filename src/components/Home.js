import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../externalcss/Home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddTime from './AddTime';





export default function Home() {
  const [dataoftime, setdataoftime] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/tracker/api/time')
      .then(response => {
        const sortedTimeList = response.data.timeList.sort((a, b) =>
          new Date(a.timeStart.year, a.timeStart.monthValue - 1, a.timeStart.dayOfMonth) -
          new Date(b.timeStart.year, b.timeStart.monthValue - 1, b.timeStart.dayOfMonth)
        );

        setdataoftime(sortedTimeList);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  return (
    
    <div>
       <Router>
      
      <Routes>
          <Route path="/AddTime" element={<AddTime/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>

       <div id="fontbox"> <h2>Working Details</h2></div>
      <table >
      
        <thead>
          <tr className="table-danger">
            <th>Date</th>
            <th>User</th>
            <th>Task</th>
            <th>Start time</th>
            <th>End time</th>
            <th>Spent time</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {dataoftime && dataoftime.map(time => (
            <tr key={time.id}>
              <td>{time.timeStart.dayOfMonth}-{time.timeStart.month}-{time.timeStart.year}</td>
              <td>{time.employee.name}</td>
              <td>{time.task.description}</td>
              <td>{time.timeStart.hour}:{time.timeStart.minute}</td>
              <td>{time.timeEnd.hour}:{time.timeEnd.minute}</td>
              <td> {`${time.timeEnd.hour - time.timeStart.hour} hours ${time.timeEnd.minute - time.timeStart.minute} minutes`}</td>
              <td>{time.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
      <div>
       
        <nav>
          <ul>
         <li><ink to="/AddTime" className="button">Add time</ink></li>
         </ul>
        </nav>
        
        
      </div>
    </Router>
     
      </div>
  );
}
