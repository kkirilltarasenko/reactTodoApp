import React from 'react';
import cl from "./ModalWindow.module.css";

const ModalWindow = ({children, visible, setVisible}) => {
    const modalClasses = [cl.todoModal];
    if (visible) {
        modalClasses.push(cl.active);
    }

    return (
        <div className={modalClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.todoModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;
