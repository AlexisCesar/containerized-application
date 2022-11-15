import './App.css';

function App() {

  let connetionWasEstablished = false;
  let serverMessage = null;

  return (
    <div className="App">
      <header className="App-header">
        <p>The connection with the backend:</p>
        <div className={connetionWasEstablished ? "connected" : "disconnected"}>
          { connetionWasEstablished ? "was established :)" : "failed :("}
        </div>
        {connetionWasEstablished && <p>Server message: {serverMessage}</p>}
      </header>
    </div>
  );
}

export default App;
