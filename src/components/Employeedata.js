import React from 'react'

const Employeedata= (props) => {

        
  return (
    <div>
        <h3>Child Component from emp</h3>
    {/* <pre>{JSON.stringify(props.employeejson, null, 2)}</pre> */}
    {
        props.children
    }
     </div>  
);
     }

     
export default Employeedata;