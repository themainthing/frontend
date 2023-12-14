import React, { useEffect, useState } from 'react';
import axios from 'axios';

import QuizUI from './QuizUI';

const Firstgrp = () => {
  const [memberdataB, setMemberdataB] = useState([]);
  const [memberdataG, setMemberdataG] = useState([]);
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/Reactfxn/activities')
      .then(response => {
        const gdata = response.data.filter(member => member.grp == "Green");
        const bdata = response.data.filter(member => member.grp == "Blue");
        setMemberdataG(gdata);
        setMemberdataB(bdata);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      
  }, []);
  
  const [greenPid, setgreenPid] = useState([]);
  const [bluePid, setbluePid] = useState([]);

  const greenCheckbox = (g) => {
    const memberId = g.target.value;
    const isChecked = g.target.checked;
    console.log('CheckedGreen IDs:', greenPid);
    setgreenPid((alreadyChecked) => {
      if (isChecked) {
        return [...alreadyChecked, memberId];
      } else {
        return alreadyChecked.filter((id) => id !== memberId);
      }
      
    })};
    const blueCheckbox = (b) => {
        const memberId = b.target.value;
        const isChecked = b.target.checked;
        console.log('Checked Blue IDs:', bluePid);
        setbluePid((alreadyChecked) => {
          if (isChecked) {
            return [...alreadyChecked, memberId];
          } else {
            return alreadyChecked.filter((id) => id !== memberId);
          }
          
        })};
        const showOther = () => {
            setShowOtherComponent(true);
          };

 
  
  return (
    <div>
        <section id='left'>
            <div>
            <h2>Team Green:</h2>
        <table id='table'>
    <thead>
    <tr >
        <th >Name</th>
        <th>Group</th>
        <th>Present</th>
    </tr>
    </thead>
<tbody>
   
    {memberdataG.map(memberg => (
        <tr key={memberg.id}>
            <td>{memberg.name}</td>
                <td>{memberg.grp}</td>
                <td> <input type="checkbox" value={memberg.id}  
                  checked={true}
                  onChange={greenCheckbox} /></td>
        </tr>
    ))}
</tbody>
</table>
            </div>
        </section>

        <section id='right'>
            <div>
            <h2>Team Blue:</h2>
        <table id='table' >
    <thead>
    <tr>
        <th >Name</th>
        <th>Group</th>
        <th>Present</th>
    </tr>
    </thead>
<tbody>
   
    {memberdataB.map(memberb => (
        <tr id='btable' key={memberb.id} >
            <td>{memberb.name}</td>
                <td>{memberb.grp}</td>
                <td><input type="checkbox" value={memberb.id}  
                  onChange={blueCheckbox} /> </td>
        </tr>
    ))}
</tbody>
</table>

            </div>
           
        </section>
        <br></br><br></br><br></br><br></br>
        <div><button id="button" type="submit">Done</button></div>
       
        <QuizUI  greenPid={greenPid} bluePid={bluePid} memberdataB={memberdataB}
         memberdataG={memberdataG}  showOther={showOther}/>
         {/* {showOtherComponent && greenPid={greenPid} bluePid={bluePid} />} */}
    </div>
  );
};

export default Firstgrp;
