/** @format */

import React, { useState } from "react";
import "./ticket.css";

const Ticket = ({ eventName, date, startTime, endTime, venue, address }) => {
  const [zoom, setZoom] = useState(1);
  const barcode =
    "https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb";

  const handleZoomIn = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const handleZoomOut = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.5));
  };

  const handleResetZoom = (e) => {
    e.preventDefault();
    setZoom(1);
  };

  return (
    <div className="ticket-window">
      <div className="ticket-zoom-controls">
        <button className="ticket-zoom-button" onClick={handleZoomIn}>
          +
        </button>
        <button className="ticket-zoom-button" onClick={handleZoomOut}>
          -
        </button>
        <button className="ticket-zoom-button" onClick={handleResetZoom}>
          Reset
        </button>
      </div>
      <div
        className="ticket"
        style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
      >
        <div className="left">
          <div className="image">
            <p className="admit-one">
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
              <span>ADMIT ONE</span>
            </p>
            <div className="ticket-number">
              <p>#20030220</p>
            </div>
          </div>
          <div className="ticket-info">
            <p className="date">
              <span></span>
              <span className="june-29">{date}</span>
              <span></span>
            </p>
            <div className="show-name">
              <h1>{eventName}</h1>
              <h2></h2>
            </div>
            <div className="time">
              <p>
                {startTime} <span>TO</span> {endTime}
              </p>
              <p>
                DOORS <span>@</span> {startTime}
              </p>
            </div>
            <p className="location">
              <span>{venue}</span>
              <span className="separator">
                <i className="far fa-smile"></i>
              </span>
              <span>{address}</span>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="admit-one">
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
            <span>ADMIT ONE</span>
          </p>
          <div className="right-info-container">
            <div className="show-name">
              <h1>{eventName}</h1>
            </div>
            <div className="time">
              <p>
                {startTime} <span>TO</span> {endTime}
              </p>
              <p>
                DOORS <span>@</span> {startTime}
              </p>
            </div>
            <div className="barcode">
              <img src={barcode} alt="barcode" />
            </div>
            <p className="ticket-number">#20030220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
