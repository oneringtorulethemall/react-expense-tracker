import React, { useState, MouseEvent, MouseEventHandler } from 'react';
import './TextMessage.css';

const TextMessage = (props: any) => {
    return (
        <div className='text-message-container'>
            <div className="text-message">
                {props.text}
            </div>
        </div>
    );
};

export default TextMessage;
