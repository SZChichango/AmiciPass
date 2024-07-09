/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>This is the beginning of your journey!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          necessitatibus distinctio error inventore quibusdam, praesentium
          doloremque animi provident ex ducimus. Ad dolorum repellat dolores vel
          quo, quaerat illo fugiat ipsum nesciunt ab corrupti, eius harum.
        </p>
        <button>Get Started</button>

        <div className="search">
          <input type="text" className="search-input" />
          <button className="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
