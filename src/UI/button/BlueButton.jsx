import React from 'react';
import classes from './BlueButton.module.css'
const BlueButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.BlueButton}>{children}</button>
        </div>
    );
};

export default BlueButton;