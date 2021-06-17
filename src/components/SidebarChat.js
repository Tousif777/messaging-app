import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./SidebarChat.css";
import { setChat } from "../features/chatSlice";
import db from "../firebase";
import * as timeago from "timeago.js";

function SidebarChat({ id, chatname }) {
  const dispatch = useDispatch();
  const [chatinfo, setchatinfo] = useState([]);

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setchatinfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatid: id,
            chatname: chatname,
          })
        );
      }}
      className="sidebarchat"
    >
      <Avatar src={chatinfo[0]?.photo} />
      <div className="sidebarChat_info">
        <h3>{chatname}</h3>
        <p>{chatinfo[0]?.message}</p>
        <small>
          {timeago.format(new Date(chatinfo[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
