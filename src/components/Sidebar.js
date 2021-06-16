import { Avatar, IconButton } from "@material-ui/core";
import { RateReviewOutlined } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar className="sidebar_avatar" />
        <div className="sidebar_input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton variant="outlined" className="sidebar_inputbutton">
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className="sidebar_chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
