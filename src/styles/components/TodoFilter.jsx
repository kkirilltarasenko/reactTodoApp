import React from 'react';
import cl from './TodoFilter.module.css'

const TodoFilter = ({filter, setFilter}) => {
    return (
        <input
            placeholder="todo.."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className={cl.todoFilter}
            type="text"
        />
    );
};

export default TodoFilter;
