import React from 'react';
import PropTypes from 'prop-types';
import '../pages/messageHistory.style.css'

export const MessageHistory =({msg}) =>{
    if (!msg)  return null;
    console.log(msg);
    return msg.map((row,i)=>
    //Key must be unique so react knows what to update
        <div key={i} className="message-history mt-4">
            <div className="send mt-5">
                <div className="sender">{row.messageBy}</div>
                <div className="date">{row.date}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>
        )
};

MessageHistory.prototypes = {
    msg: PropTypes.array.isRequired
};