import React from 'react';
import cl from './InputTodo.module.css';

const InputTodo = (props) => {
    return (
        <input {...props} className={cl.inputTodo}/>
    );
};

export default InputTodo;
