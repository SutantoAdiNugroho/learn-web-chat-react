import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.authReducers.user);

  return (
    <div>
      <h1>Chat Screen</h1>
      <h2>Welcome, {user.firstname}</h2>
    </div>
  );
};

export default Chat;
