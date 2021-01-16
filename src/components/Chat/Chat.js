import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar/Navbar";

import "./Chat.scss";

const Chat = () => {
  const user = useSelector((state) => state.authReducers);
  console.log("state user", user);

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">Data</div>
    </div>
  );
};

export default Chat;
