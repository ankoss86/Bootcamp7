import React from 'react';
import './Modal.css';

const Modal = ({prop, children}) => {
    return (
        <div className='modal'>
        <i onClick={prop} className="fas fa-times"></i>
            {children}
        </div>
    );
};

export default Modal;