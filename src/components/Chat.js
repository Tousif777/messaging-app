import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setinput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setinput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <h4>
          To:<span className="chat_name">Youtube channel</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat_messages">
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
        <h2>I'm a message</h2>
      </div>

      <div className="chat_input">
        <form>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="enter the message"
            type="text"
          />
          <button onClick={sendMessage}>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
