/** @format */

import React from "react";
import "./upcoming.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Upcoming() {
  return (
    <main className="upcoming-events grid p-4 mb-16">
      <div className="title-header-container mb-9 flex justify-between items-center">
        <div className="title-container">
          <h1 className="text-2xl">Upcoming Events</h1>
          <p>Our Favourite Picks</p>
        </div>
        <Link to="/">
          See All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div className="event-cards grid grid-cols-6">
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-image"></div>
          <div className="category"> Illustration </div>
          <div className="heading">
            {" "}
            A heading that must span over two lines
            <div className="author">
              {" "}
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Upcoming;
