import React from 'react';
import cl from './Button.module.css'

const CreateButton = ({children, ...props}) => {
    return (
        <button type="submit" {...props} className={cl.CreateButton}>
            {children}
        </button>
    );
};

export default CreateButton;
