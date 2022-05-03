import React, {useState} from 'react';
import InputTodo from "./UI/Input/InputTodo";
import CreateButton from "./UI/Button/CreateButton";

const TodoForm = ({create, position}) => {
    const [todo, setTodo] = useState({body: '', complete: false, mark: false, show: true});

    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo, id: position
        }
        create(newTodo);
        setTodo({...todo, body: ''})
    }

    return (
        <form style={{display: "flex", justifyContent: "center"}}>
            <InputTodo
                value={todo.body}
                onChange={e => setTodo({...todo, body: e.target.value})}
                type="text"
                placeholder="Text goes here"
            />
            <CreateButton onClick={createTodo}>+</CreateButton>
        </form>
    );
};

export default TodoForm;
