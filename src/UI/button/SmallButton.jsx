import React from 'react';
import classes from './SmallButton.module.css'
const SmallButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.SmallButton}>{children}</button>
        </div>
    );
};

export default SmallButton;