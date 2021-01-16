import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../store/actions/auth";

import loginImage from "../../assets/images/login.svg";

import "./Auth.scss";

const Login = ({ history }) => {
  const [email, setEmail] = useState("ikhsanudin@gmail.com");
  const [password, setPassword] = useState("secret");

  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }, history));
  };

  const userAfterReg = useSelector((state) => state.authReducers);
  console.log("userAfterReg", userAfterReg);

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={loginImage} alt="Login" />
          </div>
          <div id="form-section">
            <h2>Welcome Back</h2>

            <form onSubmit={submitForm}>
              <div className="input-field mb-1">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required="required"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="input-field mb-2">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required="required"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button>LOGIN</button>
            </form>
            <p>
              Dont have account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
