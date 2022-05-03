import React from 'react';
import cl from './Button.module.css';

const Button = ({children, func, ...props}) => {
    const buttonClasses = [];

    if (func === true) {
        buttonClasses.push(cl.SubmitButton);
    } else {
        buttonClasses.push(cl.DeleteButton);
    }

    return (
        <button {...props} className={buttonClasses.join()} type="submit">
            {children}
        </button>
    );
};

export default Button;
