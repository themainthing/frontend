import React, {useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Axios from "axios";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const EditMark = () => {
    const param = useParams()
    const router = useNavigate()
    const url = "http://localhost:9090/RepApp_war_exploded/marks"
    const[data, setData] = useState({
        number_id: param.id, mark: ''
    })

    async function submit(e){
        await Axios.put(url, {
            id: data.number_id,
            mark: data.mark,
        })
        setData({number_id: '', mark: ''})
        router(`/marks`)
    }
    return (
        <div className='form'>
            <h3>EDIT YOUR MARK!</h3>
            <MyInput value={data.number_id}
                     disabled = {true}
                     onChange={e => setData({...data, number_id: e.target.value})}
                     type="number"
                     placeholder={'member_id'}/><br/>
            <MyInput value={data.mark}
                     onChange={e => setData({...data, mark: e.target.value})}
                     type="number" step="0.1"
                     placeholder={'mark'}/><br/>
            <MyButton onClick={submit}>Send</MyButton>
        </div>
    );
};

export default EditMark;