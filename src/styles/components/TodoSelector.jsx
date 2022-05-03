import React from 'react';
import cl from './TodoSelector.module.css'

const TodoSelector = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={cl.todoSelector}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={false} value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default TodoSelector;
