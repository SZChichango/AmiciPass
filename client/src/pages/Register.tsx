/** @format */

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../models/User";
import "./register.css";

interface Errors {
  name?: string;
  username?: string;
  email?: string;
  dob?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const isValid = validateForm();
    if (isValid) {
      const user = new User(
        "uuid-v4-string", // replace with actual UUID generation
        name,
        username,
        email,
        new Date(dob),
        password
      );
      try {
        const response = await axios.post(
          "http://localhost:5000/api/register",
          user
        );
        console.log(response.data);
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  const validateForm = () => {
    const errors: Errors = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      errors.name = "Name must only contain letters";
    }

    if (!username) {
      errors.username = "Username is required";
    } else if (!/^[A-Za-z0-9_-]+$/.test(username)) {
      errors.username =
        "Username must only contain letters, numbers, underscores, and dashes";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!dob) {
      errors.dob = "Date of birth is required";
    } else if (new Date(dob).getTime() > new Date().getTime()) {
      errors.dob = "Date of birth must be in the past";
    } else if (new Date(dob).getTime() < new Date(2000, 0, 1).getTime()) {
      errors.dob = "Date of birth must be after 2000";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <Header />
      <main className="main-container">
        {success ? (
          <div className="success-message">Registration successful!</div>
        ) : (
          <div className="form-container shadow-lg">
            <p className="title">Register</p>

            <form className="form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  placeholder="John"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div style={{ color: "red" }}>{errors.name}</div>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="John_05"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <div style={{ color: "red" }}>{errors.username}</div>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  placeholder="e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div style={{ color: "red" }}>{errors.email}</div>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                {errors.dob && <div style={{ color: "red" }}>{errors.dob}</div>}
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div style={{ color: "red" }}>{errors.password}</div>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                )}
              </div>
              {loading ? (
                <div className="cssload-container">
                  <ul className="cssload-flex-container">
                    <li>
                      <span className="cssload-loading cssload-one"></span>
                      <span className="cssload-loading cssload-two"></span>
                      <span className="cssload-loading-center"></span>
                    </li>
                  </ul>
                </div>
              ) : (
                <button className="sign" disabled={loading}>
                  Register
                </button>
              )}
            </form>
            <div className="social-message">
              <div className="line"></div>
              <p className="message">Register with social accounts</p>
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
              Do you have an account?
              <Link rel="noopener noreferrer" to="/login" className="">
                Login
              </Link>
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Register;
