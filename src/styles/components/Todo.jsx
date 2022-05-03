import React from 'react';
import cl from './Todo.module.css'
import Checkbox from "./UI/Checkbox/Checkbox";
import Button from "./UI/Button/Button";

const Todo = (props) => {
    return (
        <div className={props.todo.show ? cl.todo : cl.todoUnShow}>
            <h1 className={cl.todoId}><strong>{props.number}</strong>.</h1>
            <h2 className={props.todo.complete ? cl.active : cl.todoBody}>{props.todo.body}</h2>
            <Checkbox x={props.todo.mark} onClick={() => props.handle(props.todo.id)}/>
            <Button func={false} onClick={() => props.remove(props.todo)} >
                <span className="material-symbols-outlined">
                    delete
                </span>
            </Button>
        </div>
    );
};

export default Todo;
