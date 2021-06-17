import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../features/chatSlice";
import db from "../firebase";
import "./Chat.css";
import Message from "./Message";
import firebase from "firebase";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import FlipMove from "react-flip-move";
import { Button } from "@material-ui/core";

function Chat() {
  const user = useSelector(selectUser);
  const [input, setinput] = useState("");
  const chatname = useSelector(selectChatName);
  const chatid = useSelector(selectChatId);
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    if (chatid) {
      db.collection("chats")
        .doc(chatid)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setmessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
              uid: user.uid,
              photo: user.photo,
              email: user.email,
              displayname: user.displayname,
            }))
          )
        );
    }
    console.log(messages);
  }, [chatid]);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("chats").doc(chatid).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayname: user.displayName,
    });

    setinput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <h4>
          To:<span className="chat_name">{chatname}</span>
        </h4>
        <strong className="logout" onClick={() => auth.signOut()}>
          Logout
        </strong>
      </div>

      <div className="chat_messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat_input">
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            placeholder="enter the message"
            type="text"
          />
          <Button onClick={sendMessage} type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
