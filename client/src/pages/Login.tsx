/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.token}`;
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="form-container shadow-lg">
          <p className="title">Login</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="forgot">
                <Link rel="noopener noreferrer" to="#">
                  Forgot Password ?
                </Link>
              </div>
            </div>
            <button className="sign">Sign in</button>
          </form>
          <div className="social-message">
            <div className="line"></div>
            <p className="message">Login with social accounts</p>
            <div className="line"></div>
          </div>
          <div className="social-icons">
            <button aria-label="Log in with Google" className="icon">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
            <button aria-label="Log in with Twitter" className="icon">
              <FontAwesomeIcon icon={faXTwitter} />
            </button>
          </div>
          <p className="signup">
            Don't have an account?
            <Link rel="noopener noreferrer" to="/register" className="">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;
