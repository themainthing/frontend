import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const ActivityItem = ({activity, key, remove, member}) => {
    const router = useNavigate()
    const date = new Date((activity.date))
    return (
        <div className='post' key={key}>
            <div className="post__content" style={{textAlign: "center"}}>
                {new Date(date.setTime(date.getTime()+19000000)).toISOString().substring(0,10)} {activity.subject} {activity.tookTime}h
                <div className="post__btns" style={{textAlign: "center"}}>
            <MyButton onClick={() => router(`/edit/${activity.id}/${member}`)}>EDIT ACTIVITY</MyButton>
            <MyButton onClick={() => remove(activity.id)}>DELETE ACTIVITY</MyButton>
                </div>
            </div>
        </div>
    );
};

export default ActivityItem;