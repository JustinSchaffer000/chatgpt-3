import React from "react";
import ChatMessage from "./ChatMessage";
import getMessage from "./GetMessage";
import { useState } from "react";

const Chatbox = ({ currentModel }) => {
  const [chatLog, setChatLog] = useState([]);

  const [inputMesaage, setInputMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = inputMesaage;
    setChatLog([...chatLog, { user: "me", message: message }]);
    setInputMessage("");
    const value = await getMessage.Ans({
      prompt: message,
      model: currentModel,
    });
    setChatLog([
      ...chatLog,
      { user: "me", message: message },
      { user: "gpt", message: value },
    ]);
    console.log("chatlog", chatLog);
  };

  return (
    <section className="chatbox">
      <div className="chat-log">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            rows="1"
            value={inputMesaage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="chat-input-textarea"
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Chatbox;
