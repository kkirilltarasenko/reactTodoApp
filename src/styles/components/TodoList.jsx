import React from "react";
import Todo from "./Todo";
import cl from "./TodoList.module.css"
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TodoList = ({todos, remove, handle}) => {
    if (!todos.length) {
        return (
            <h1 className={cl.alert}>You don't create any todos :(</h1>
        )
    }

    return (
        <div className={cl.todoList}>
            <TransitionGroup>
                {todos.map((todo, index) =>
                    <CSSTransition
                        key={todo.id}
                        timeout={500}
                        classNames="item"
                    >
                        <Todo todo={todo} number={index + 1}  remove={remove} handle={handle}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default TodoList;
