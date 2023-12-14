import React, {useState} from 'react';
import Axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {Link, useNavigate, useParams} from "react-router-dom";

const UpdateForm = () => {
    const param = useParams()
    const router = useNavigate()
    const url = 'http://34.118.96.12:8080/RepApp/activities/'
    const[data, setData] = useState({
        number_id: param.key, subject: '', tookTime: null
    })

    async function update(e){
         await Axios.put(url, {
             id: param.id,
            memberId: data.number_id,
            subject: data.subject,
            tookTime: data.tookTime
        })
        setData({number_id: null, subject: '', tookTime: null})
        router(`/`)
    }
    return (
        <div className='form'>
            <h3>EDIT YOUR ACTIVITY!</h3>
            <MyInput value={data.number_id}
                     disabled = {true}
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