import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import db, { auth } from "../firebase";

function Sidebar() {
  const user = useSelector(selectUser);
  const [chats, setchats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) =>
      setchats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addChat = () => {
    const chatname = prompt("enter the chat name");
    if (chatname) {
      db.collection("chats").add({
        chatname: chatname,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar
          onClick={() => auth.signOut()}
          src={user.photo}
          className="sidebar_avatar"
        />
        <div className="sidebar_input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputbutton">
          <RateReviewOutlined onClick={addChat} />
        </IconButton>
      </div>
      <div className="sidebar_chat">
        {chats.map(({ id, data: { chatname } }) => (
          <SidebarChat key={id} id={id} chatname={chatname} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
