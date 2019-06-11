import React from 'react';
import '../App.css';
import Message from './Message';

const generateChatComponents = (messages) => {
  return messages.map((message, i) => {
    const { sender, body, timeStamp } = message;
    return (<Message
      key={i}
      sender={sender}
      body={body}
      timeStamp={timeStamp}
      />);
  });
};

const Chat = (props) => {
  const { messages } = props;
  const chatComponents = generateChatComponents(messages);

  return (
    <div>
      {chatComponents}
    </div>
  );
}

export default Chat;