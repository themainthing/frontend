import React, {useState} from 'react';
import Axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {Link, useNavigate, useParams} from "react-router-dom";

const UpdateForm = (props) => {
    const param = useParams()
    const router = useNavigate()
    const url = 'https://34.73.2.246:8080/RepApp/members'+param.id
    const[data, setData] = useState({
        number_id: null, subject: '', tookTime: null
    })

    async function update(e){
         await Axios.put(url, {
            member: {id: data.number_id},
            subject: data.subject,
            tookTime: data.tookTime
        })
        setData({number_id: null, subject: '', tookTime: null})
        router(`/get`)
    }
    return (
        <div>
            <h3>{url}</h3>
            <MyInput value={data.number_id}
                     onChange={e => setData({...data, number_id: e.target.value})}
                     type="number"
                     placeholder={'member_id'}/><br/>
            <MyInput value={data.subject}
                     onChange={e => setData({...data, subject: e.target.value})}
                     type="text"
                     placeholder={'subject'}/><br/>
            <MyInput value={data.tookTime}
                     onChange={e => setData({...data, tookTime: e.target.value})}
                     type="number" step="0.1"
                     placeholder={'took_time'}/><br/>
            <MyButton onClick={update}>Send</MyButton>
        </div>
    );
};
export default UpdateForm;