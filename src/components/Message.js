import React from 'react';
import '../App.css';
import Timestamp from './Timestamp';

const Message = (props) => {
  let positionalChatClass = 'chat-entry local';
  if (props.sender === 'Estragon') {
    positionalChatClass = 'chat-entry remote'
  }
  return (
    <section className={positionalChatClass}>
      <h3 className="entry-name">{props.sender}</h3>
      <div className="entry-bubble">
        <h5 className="entry-body">{props.body}</h5>
        <h5 className="entry-time">
          <Timestamp
          time={props.timeStamp}
          />
        </h5>
      </div>
    </section>
  );
}

export default Message;