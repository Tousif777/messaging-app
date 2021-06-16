import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";
function SidebarChat() {
  return (
    <div className="sidebarchat">
      <Avatar />
      <div className="sidebarChat_info">
        <h3>Channel name</h3>
        <p>Last message sent...</p>
        <small>timestamp</small>
      </div>
    </div>
  );
}

export default SidebarChat;
