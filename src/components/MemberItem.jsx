import React from 'react';
import MyButton from "../UI/button/MyButton";

const MemberItem = (props) => {
    return(
        <div className="member">
            <div className="member__content">
                <strong>{props.number} {props.member.name}</strong>
                <div>
                    {props.member.activity}
                </div>
            </div>
        </div>
    );
};

export default MemberItem;