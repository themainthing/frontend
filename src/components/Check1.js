import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizUI from './QuizUI';

const Check1 = () => {
  const [memberdataG, setMemberdataG] = useState([]);
  const [greenPid, setGreenPid] = useState([]);

  useEffect(() => {
    axios.get('http://34.118.96.12:8080/RepApp/members?groupId=1')
      .then(response => {
        setMemberdataG(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
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
    // Handle the submit logic here, for example, you can log the selected member IDs
    console.log('Selected Member IDs:', greenPid);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Member List:</h2>
        <table className="table-success table table-bordered border-primary table table-sm">
          <thead>
            <tr className="table-danger">
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
        <button type="submit">Submit</button>
      </form>

      <div>
        <QuizUI memberdataG={memberdataG} />
      </div>
    </div>
  );
};

export default Check1;
