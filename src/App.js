import "./App.css";
import Chatbox from "./pages/Chatbox";
import InputKey from "./pages/InputKey";
import { useState } from "react";

function App() {
  const [ApiKEY, setApiKEY] = useState("");

  return (
    <div className="App">
      {ApiKEY ? (
        <Chatbox APIKEY={ApiKEY} />
      ) : (
        <InputKey setApiKEY={setApiKEY} />
      )}
    </div>
  );
}

export default App;
