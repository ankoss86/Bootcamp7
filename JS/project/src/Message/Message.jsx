import React from 'react';
import './Message.css';

const Message = ({logo, message, userName}) => {
    return (
        <div className='messageBox'>
            <div className="userInfo">
                <img src={logo} alt="1" className="userLogo"/>
                <span className="userName">{userName}</span>
            </div>
            <p className="textMess">{message}</p>
        </div>
    );
};

export default Message;