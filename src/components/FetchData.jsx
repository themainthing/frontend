import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyButton from "../UI/button/MyButton";
import {redirect, useNavigate} from "react-router-dom";
import ActivityItem from "./ActivityItem";

function FetchData() {
    const [members, setMembers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/RepApp/members',
            { params: {groupId: '1'}
            })
            .then(res => setMembers(res.data))
    }, []);

    async function remove(id){
        await axios.delete('http://localhost:8080/RepApp/activities',{
            data: {
            id: id
        }
        })
        axios.get('http://localhost:8080/RepApp/RepApp/members',
            { params: {groupId: '1'}
            })
            .then(res => setMembers(res.data))
    }
    const router = useNavigate()
    return (
        <div className='container'>
            {
                members.map(member => {
                    return(
                        <div key={member.id}>
                            <h3>{member.name}
                                <div className='activityBtn'>
                                    <MyButton onClick={() => router(`/add/${member.id}`)}>ADD ACTIVITY</MyButton>
                                </div>
                            </h3>
                            {member.activities && member.activities.map(activity => (
                                <ActivityItem member={member.id} activity={activity} key={activity.id} remove={remove}/>
                            ))}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FetchData;