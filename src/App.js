import "./App.css";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";

import { useState } from "react";

function App() {
  const [currentModel, setCurrentModel] = useState("text-davinci-003");

  return (
    <div className="App">
      <Sidebar setCurrentModel={setCurrentModel} />
      <Chatbox currentModel={currentModel} />
    </div>
  );
}

export default App;
