import React, { useState } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom";

const TeamDisplay = ({ teamColor, generatedNumber, apiData }) => {
  const url='http://localhost:8080/RepApp/marks';
  const param = useParams();
  const[data, setData] = useState({
    number_id: param.id,  mark: null
})

 async function submit(e){
  console.log(data.number_id);
  console.log(data.mark);
  
  await axios.post(url, {
      memberId: data.number_id,
      mark: data.mark
  })
  console.log("marks added");
  setData({number_id: null, mark: null})
  
}

  return (
    <div>
      
      <h2>{teamColor} Team</h2>
      <p>Generated Number: {generatedNumber}</p>
      {apiData && apiData.length > 0 && (
        <div>
          <p>API Data:</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Set Marks</th>
                <th>Send Marks</th>
              </tr>
            </thead>
            <tbody>
            {apiData.map(member => (
              <tr  key={member.id}>
                <td>{member.name}</td>
                <td>
                  <input
                    type="text"
                    onChange={e => setData({ number_id: member.id, mark: e.target.value })}
                  />
                </td>
                <td><button type='submit' onClick={submit}>Submit</button></td>
              </tr>
            ))}
          </tbody>
          </table>
          
        </div>
        
      )}
     
    </div>
  );
};

export default TeamDisplay;
