import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyButton from "../UI/button/MyButton";
import ActivityItem from "./ActivityItem";
import {useNavigate} from "react-router-dom";
import MarkItem from "./MarkItem";
import GreenButton from "../UI/button/GreenButton";

const MarkTable = () => {
    const [members, setMembers] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }, []);
    async function remove(id){
        await axios.delete('http://localhost:8080/RepApp/marks',{
            data: {
                id: id
            }
        })
        axios.get('http://localhost:8080/RepApp/members')
            .then(res => setMembers(res.data))
    }

    const router = useNavigate()
    return (
        <div>
            <div className='container'>
                {
                    members.map(member => {
                        return(
                            <div key={member.id}>
                                {member.nameGroup === "Green"
                                    ? <div>
                                    <h3>{member.name}
                                     <div className='activityBtn'>
                                        <GreenButton onClick={() => router(`/addmark/${member.id}`)}>ADD MARK</GreenButton>
                                    </div>
                                </h3>
                                    <div  className="greenmark__container" >
                                {member.marks && member.marks.map(mark => (
                                    <MarkItem member={member.id} mark={mark} key={mark.id} remove={remove}/>
                                ))}
                                </div>
                                    </div>
                                    : <div>
                                        <h3>{member.name}
                                            <div className='activityBtn'>
                                                <MyButton onClick={() => router(`/addmark/${member.id}`)}>ADD MARK</MyButton>
                                            </div>
                                        </h3>
                                        <div  className="bluemark__container" >
                                            {member.marks && member.marks.map(mark => (
                                                <MarkItem member={member.id} mark={mark} key={mark.mark}/>
                                            ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MarkTable;