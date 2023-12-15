import React from 'react';
import {useNavigate} from "react-router-dom";
import MyButton from "../UI/button/MyButton";
import SmallButton from "../UI/button/SmallButton";

const MarkItem = ({mark, member, remove}) => {
    const router = useNavigate()
    const date = new Date((mark.date))
    return (
        <div className='markItem' key={member.id} style={{textAlign: "center"}}>
            <div className="post__date" >
                &nbsp;&nbsp;{new Date(date.setTime(date.getTime()+19000000)).toISOString().substring(0,10)}
                <div className="post__mark">
                    mark: {mark.mark}
                    <div className="markBtn">
                    <SmallButton onClick={() => router(`/editmark/${mark.id}`)}>EDIT</SmallButton>
                    </div>
                    <div className="markBtn">
                    <SmallButton onClick={() => remove(mark.id)}>DELETE</SmallButton>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarkItem;