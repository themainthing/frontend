import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Employeedata from './Employeedata';
import Taskdata from './Taskdata';

const Tabledata = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    const apiUrl1 = 'http://localhost:8080/tracker/api/task';
    const apiUrl2 = 'http://localhost:8080/tracker/api/time';
    const apiUrl3 = 'http://localhost:8080/tracker/api/employee';


    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          axios.get(apiUrl1),
          axios.get(apiUrl2),
          axios.get(apiUrl3),
        ]);

        setData1(response1.data);
        setData2(response2.data);
        setData3(response3.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <h3>Data for Time:</h3>
        <h2>Time List</h2>
            <table class="table-success table table-bordered border-primary table table-sm">
        <thead>
        <tr class="table-danger">
            <th >Date</th>
            <th >User</th>
            <th >TaskName</th>
            <th >Start_Time</th>
            <th >End_Time</th>
            <th >Spent_Time</th>
            <th>Comment</th>
        </tr>
        </thead>
    <tbody>
    {data2 && data2.timeList && data2.timeList.map(time => (
    <tr key={time.id}>
              <td>{time.timeStart.dayOfMonth}-{time.timeStart.month}-{time.timeStart.year}</td>
              <td>{time.employee.name}</td>
              <td>{time.task.description}</td>
              <td> {time.timeStart.hour}:{time.timeStart.minute}</td>
              <td>{time.timeEnd.hour}:{time.timeEnd.minute}</td>
              <td>{time.timeSpent} hours</td>
              <td>{time.comment}</td>
    </tr>
))}
    </tbody>
</table>
      </div>

      <div>
        {/* <h3>Data from Task:</h3>
        <Tabledata taskjson={data1}/> */}
      </div>


      <div>
        <Employeedata employeejson={data3}>
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
    {/* {data3 && data3.employeeList && data3.employeeList.map(employee => (
    <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{employee.surname}</td>
    </tr> */}
     {data3 && data3.employeeList && data3.employeeList.map(employee => (
    <select key={employee.id}>
        <option>{employee.name}</option>
        <option>{employee.surname}</option>
    </select>
))}
    </tbody>
</table>

        </div>
     </Employeedata>
     </div>
   
  </div>

  );
  
};


export default Tabledata;

