/** @format */

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="main-footer bg-gray-50 p-4 flex flex-col justify-around gap-8 mt-9 shadow-sm">
      <Link to="/Home" className="logo-wrap">
        <img src={logo} className="logo" alt="AmiciPass Logo" />
      </Link>

      <div className="links-container flex justify-around">
        <ul>
          <li>
            <Link to="/">Sell Tickets</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link to="/">T's and C's</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Legal</Link>
          </li>
        </ul>
        <ul className="social-links flex flex-row gap-8">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
