import React, {useState} from 'react';
import Axios from 'axios'
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const AddForm = () => {
    const url = "https://35.237.141.104:8443/RepApp/activities"
    const[data, setData] = useState({
        number_id: null, subject: '', tookTime: null
    })

    function submit(e){
        Axios.post(url, {
            member: {id: data.number_id},
            subject: data.subject,
            tookTime: data.tookTime
        })
        setData({number_id: null, subject: '', tookTime: null})
        window.location.reload();
    }
    return (
        <div>
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
            <MyButton onClick={submit}>Send</MyButton>
        </div>
    );
};
export default AddForm;