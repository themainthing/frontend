import React from 'react';
import classes from './GreenButton.module.css'
const GreenButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.GreenButton}>{children}</button>
        </div>
    );
};

export default GreenButton;