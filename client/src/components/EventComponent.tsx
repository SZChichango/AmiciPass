/** @format */

import { faBookBookmark } from "@fortawesome/free-solid-svg-icons/faBookBookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const EventComponent = () => {
  return (
    <div className="event">
      <div className="card shadow-sm">
        <div className="img">
          <div className="save">
            <FontAwesomeIcon icon={faBookBookmark} />
          </div>
        </div>

        <div className="text">
          <p className="h3"> Major Vibes Party </p>
          <p className="p">Respublica Princeton Village at Alsatian Rd</p>
          <p className="p"> 20 Jun 2024 </p>
          <p className="price">
            Price: R<span>100</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
