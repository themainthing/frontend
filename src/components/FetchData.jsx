import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyButton from "../UI/button/MyButton";
import {redirect, useNavigate} from "react-router-dom";

function FetchData() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        axios.get('https://34.73.2.246:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }, []);

    async function remove(id){
        await axios.delete('https://34.73.2.246:8080/RepApp/activities'+id)
        axios.get('https://34.73.2.246:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }
    const router = useNavigate()
    return (
        <div className='container'>
            {
                members.map(member => {
                    return(
                        <div key={member.id}>
                            <h3>{member.id} {member.name}</h3>
                            {member.activities && member.activities.map(activity => (
                                <div key={member.id}>
                                    {activity.date} {activity.subject} {activity.tookTime}h
                                    <MyButton onClick={() => router(`/edit/${activity.id}`)}>EDIT</MyButton>
                                    <MyButton onClick={() => remove(activity.id)}>DELETE</MyButton>
                                </div>
                            ))}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FetchData;