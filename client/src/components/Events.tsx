/** @format */

import React from "react";

function Events() {
  return (
    <main className="featured-events grid p-4">
      <div className="title-container">
        <h1 className="text-2xl">Featured Events</h1>
        <p>Our Favourite Picks</p>
      </div>
      <div className="events-content">
        <div className="major-event-container event">
          <img src="https://loremflickr.com/640/360" />
          <div className="event-name">Major Event</div>
        </div>
        <div className="events-grid">
          <div className="event">
            <img src="https://loremflickr.com/640/360" />
            <div className="event-name">Event 1</div>
          </div>
          <div className="event">
            <img src="https://loremflickr.com/640/360" />
            <div className="event-name">Event 2</div>
          </div>
          <div className="event">
            <img src="https://loremflickr.com/640/360" />
            <div className="event-name">Event 3</div>
          </div>
          <div className="event">
            <img src="https://loremflickr.com/640/360" />
            <div className="event-name">Event 4</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Events;
