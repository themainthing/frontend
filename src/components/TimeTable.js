// import React from 'react'

// function TimeTable() {
//   return (
//     <div>
//         <h3>Timedata from child</h3>
//         <div>
//         <h2>Time List</h2>
//             <table class="table-success table table-bordered border-primary table table-sm">
//         <thead>
//         <tr class="table-danger">
//             <th >Name</th>
//             <th >TaskName</th>
//             <th >Start_Time</th>
//             <th >End_Time</th>
//             <th >Spent_Time</th>
//             <th>Comment</th>
            
//         </tr>
//         </thead>
//     <tbody>
//     {props.timejson && props.timejson.timelist && props.timejson.timeList.map(time => (
//     <tr key={time.id}>
//               <td>{time.employee.name}</td>
//               <td>{time.task.description}</td>
//               <td>{time.timeStart.dayOfMonth}-{time.timeStart.month}-{time.timeStart.year} {time.timeStart.hour}:{time.timeStart.minute}</td>
//               <td>{time.timeEnd.dayOfMonth}-{time.timeEnd.month}-{time.timeEnd.year} {time.timeEnd.hour}:{time.timeEnd.minute}</td>
//               <td>{time.timeSpent} hours</td>
//               <td>{time.comment}</td>
//     </tr>
// ))}
//     </tbody>
// </table>

//         </div>

//         </div>
//   )
// }

// export default TimeTable