/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOrganizers, setTotalOrganizers] = useState(0);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalTicketsSold, setTotalTicketsSold] = useState(0);
  const [topEvents, setTopEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersRes = await axios.get("http://localhost:3001/api/total-users");
      const organizersRes = await axios.get(
        "http://localhost:5000/api/total-organizers"
      );
      const eventsRes = await axios.get(
        "http://localhost:5000/api/total-events"
      );
      const ticketsSoldRes = await axios.get(
        "http://localhost:5000/api/total-tickets-sold"
      );
      const topEventsRes = await axios.get(
        "http://localhost:5000/api/top-events"
      );

      setTotalUsers(usersRes.data.totalUsers);
      setTotalOrganizers(organizersRes.data.totalOrganizers);
      setTotalEvents(eventsRes.data.totalEvents);
      setTotalTicketsSold(ticketsSoldRes.data.totalTicketsSold);
      setTopEvents(topEventsRes.data.topEvents);
    };

    fetchData();
  }, []);

  return (
    <>
      {/* Top cards */}
      <div className="dashboard-container">
        <div className="analytics-cards">
          <div className="analytics-card">
            <h3>Total Users</h3>
            <h1>{totalUsers}</h1>
          </div>
          <div className="analytics-card">
            <h3>Total Organizers</h3>
            <h1>{totalOrganizers}</h1>
          </div>
          <div className="analytics-card">
            <h3>Total Events</h3>
            <h1>{totalEvents}</h1>
          </div>
          <div className="analytics-card">
            <h3>Total Tickets Sold</h3>
            <h1>{totalTicketsSold}</h1>
          </div>
        </div>

        {/* Top Events */}
        <div className="dashboard-card top-events">
          <h3>Top Events</h3>
          <ul>
            {topEvents.map((event, index) => (
              <li key={index}>
                <p>{event.name}</p>
                <p>{event.ticketsSold} Sold</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
