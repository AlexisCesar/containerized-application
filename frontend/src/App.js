import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [connetionWasEstablished, setConnectionWasEstablished] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5555')
      .then(() => setConnectionWasEstablished(true))
      .catch(() => setConnectionWasEstablished(false));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>The connection with the backend:</p>
        <div className={connetionWasEstablished ? "connected" : "disconnected"}>
          { connetionWasEstablished ? "was established :)" : "failed :("}
        </div>
      </header>
    </div>
  );
}

export default App;
