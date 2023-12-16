import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Teams = () => {
  const [memberdataG, setMemberdataG] = useState([]);
  const [memberdataB, setMemberdataB] = useState([]);
  const [greenPid, setGreenPid] = useState([]);
  const [bluePid, setbluePid] = useState([]);
  const navigate = useNavigate();
 

  useEffect(() => {
    const greenapi = 'http://localhost:8080/RepApp/members?groupId=1&haveMarksToday=false';
    const blueapi = 'http://localhost:8080/RepApp/members?groupId=2&haveMarksToday=false';


    const fetchData = async () => {
        try {
            const [response1, response2] = await Promise.all([
                axios.get(greenapi),
                axios.get(blueapi),
            ]);

            setMemberdataG(response1.data);
            setMemberdataB(response2.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
      };
      fetchData();
  }, []);

  const greenCheckbox = (e) => {
    const memberId = e.target.value;
    const isChecked = e.target.checked;
    setGreenPid((alreadyChecked) => {
      if (isChecked) {
        return [...alreadyChecked, memberId];
      } else {
        return alreadyChecked.filter((id) => id !== memberId);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected GreeMember IDs:', greenPid);
    console.log('Selected BlueMember IDs:', bluePid);
  
    navigate('/QuizUI', { state: { greenPid, bluePid, memberdataB,memberdataG } });

  
   
  };
  const blueCheckbox = (b) => {
    const memberId = b.target.value;
    const isChecked = b.target.checked;
    setbluePid((alreadyChecked) => {
      if (isChecked) {
        return [...alreadyChecked, memberId];
      } else {
        return alreadyChecked.filter((id) => id !== memberId);
      }
      
    })};

  return (
    <div>
       <div>
       <form onSubmit={handleSubmit}>
    <div id='left'>
        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>Group</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody>
            {memberdataG.map(member => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.nameGroup}</td>
                <td>
                  <input
                    type="checkbox"
                    value={member.id}
                    onChange={greenCheckbox}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
       
        <div id='right'>
        
        <table  >
       
          <thead>
            <tr >
              <th>Name</th>
              <th>Group</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody >
            {memberdataB.map(member => (
              <tr id='btable' key={member.id}>
                <td>{member.name}</td>
                <td>{member.nameGroup}</td>
                <td>
                  <input
                    type="checkbox"
                    value={member.id}
                    onChange={blueCheckbox}
                    
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <button id='button' type="submit">Done</button>
       
      </form>
      </div>
  
     
    </div>
  );
};

export default Teams;
