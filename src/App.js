import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import Chat from './components/Chat'

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat with Estragon</h1>
      </header>
      <main className="App-main">
        <Chat
          messages={chatMessages}
        />
      </main>
    </div>
  );
};

export default App;
