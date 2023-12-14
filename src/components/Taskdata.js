import React from 'react'

function Taskdata(props) {
  return (
    <div>
       <h3>Taskdata from child</h3> 
          <div>
            <h2>Task List</h2>
            <table class="table-success table table-bordered border-primary table table-sm">
        <thead>
        <tr class="table-danger">
            <th>Name</th>
            <th >Description</th>
            
        </tr>
        </thead>
    <tbody>
    {props.taskjson && props.taskjson.taskList && props.taskjson.taskList.map(task => (
    <tr key={task.id}>
         <td>{task.name}</td>
        <td>{task.description}</td>
    </tr>
))}
    </tbody>
</table>

        </div>
        
        </div>

  )
}

export default Taskdata