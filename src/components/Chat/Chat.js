import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.authReducers);
  console.log("state user", user)

  return (
    <div>
      <h1>Chat Screen</h1>
      <h2>Welcome, {user.user.firstname}</h2>
    </div>
  );
};

export default Chat;
