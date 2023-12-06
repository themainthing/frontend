import React, {useEffect, useState} from 'react';
import MemberItem from "./MemberItem";
import axios from "axios";

const MembersList = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        axios.get('http://34.73.2.246:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }, []);
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                Список постов
            </h1>
            {/* eslint-disable-next-line array-callback-return */}
                {members.map((member, index) =>
                {member.activities && member.activities.map(activity => (
                    <MemberItem number={index + 1} member={member} key={member.id} activity={activity}/>
                    ))}
                )}
        </div>
    );
};

export default MembersList;