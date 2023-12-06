import React, {useEffect, useState} from 'react';
import axios from "axios";

function FetchData() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        axios.get('https://34.73.2.246:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }, []);
    return (
        <div className='container'>
            {
                members.map(member => {
                    return(
                        <div key={member.id}>
                            <h3>{member.name}</h3>
                            {member.activities && member.activities.map(activity => (
                                <div key={member.id}>
                                    {activity.date} {activity.subject} {activity.tookTime}h
                                </div>
                            ))}
                        </div>
                    )
                })
            }
            {/*<div className='mt-3'>*/}
            {/*    <h3>my data</h3>*/}
            {/*    <table className='table'>*/}
            {/*        <thead>*/}
            {/*        <tr>*/}
            {/*            <th>ID</th>*/}
            {/*            <th>Name</th>*/}
            {/*            <th>Email</th>*/}
            {/*            <th>City</th>*/}
            {/*        </tr>*/}
            {/*        </thead>*/}
            {/*        <tbody>*/}
            {/*        {members.map((member, index) => {*/}
            {/*            return <tr key={index}>*/}
            {/*                <td>{member.id}</td>*/}
            {/*                <td>{member.name}</td>*/}
            {/*                <td>{member.activities.map()}</td>*/}
            {/*                <td>{member.activities.subject}</td>*/}
            {/*                <td>{member.activities.tookTime}</td>*/}
            {/*            </tr>*/}
            {/*        })}*/}
            {/*        </tbody>*/}
            {/*    </table>*/}
            {/*</div>*/}
        </div>
    );
}

export default FetchData;
