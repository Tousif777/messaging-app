import React from "react";
import Chat from "./Chat";
import "./Imessage.css";
import Sidebar from "./Sidebar";

const Imessage = () => {
  return (
    <div className="imessage">
      {/*Sidebar */}
      <Sidebar />
      {/*chat */}
      <Chat />
    </div>
  );
};

export default Imessage;
