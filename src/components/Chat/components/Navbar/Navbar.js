import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.scss";

const Navbar = () => {
  const user = useSelector((state) => state.authReducers.user);

  return (
    <div id="navbar" className="card-shadow">
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img width="40" height="40" src={user.avatar} alt="avatar" />
        <p>
          {user.firstname} {user.lastname}
        </p>
        <FontAwesomeIcon icon="caret-down" className="fa-icon" />
      </div>
    </div>
  );
};

export default Navbar;
