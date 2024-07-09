/** @format */

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./header.css";
import "./hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// impoirt function logout

const Header: React.FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <header className="main-header flex justify-space-between items-center p-5 shadow-md">
      <Link to="/home" className="logo-wrap">
        <img src={logo} className="logo" alt="AmiciPass Logo" />
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active">
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="btns">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="btn btn--primary">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link
              to="/logout"
              className="btn btn--primary"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faSignOut} />
            </Link>
          </>
        ) : (
          <>
            <button
              className="bg-none border-solid border-teal-500"
              onClick={() => (window.location.href = "/login")}
              id="login"
            >
              Login
            </button>
            <button
              id="register"
              onClick={() => (window.location.href = "/register")}
            >
              Register
            </button>
          </>
        )}
      </div>
      <div className="menu" onClick={toggleMobileNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Mobile nav */}
      {isMobileNavVisible && (
        <nav className="mobile-nav flex p-4 fixed">
          <div className="close" onClick={toggleMobileNav}>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <ul>
            <li>
              <Link to="/home" onClick={toggleMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={toggleMobileNav}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="btns btns-mobile">
            <button
              className="bg-none border-solid border-teal-500"
              id="login"
              onClick={() => {
                toggleMobileNav();
                window.location.href = "/login";
              }}
            >
              Login
            </button>
            <button
              id="register"
              onClick={() => {
                toggleMobileNav();
                window.location.href = "/register";
              }}
            >
              Register
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
