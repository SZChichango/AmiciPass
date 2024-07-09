/** @format */

import React from "react";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";

const Orders = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container flex gap-16">
        <SideNav />
        <div className="dashboard-content my-24">
          <h1 className="text-2xl font-bold mb-4">Orders</h1>
          <div className="tickets-container flex flex-col gap-4">
            <div className="ticket bg-white shadow p-2 rounded">
              <div className="ticket-header flex justify-between items-center">
                <h1 className="text-xl font-bold">Ticket #1</h1>
                <div className="ticket-status flex items-center gap-2">
                  <div className="ticket-status-circle bg-green-500"></div>
                  <p className="text-sm font-semibold">Attended</p>
                </div>
              </div>
              <div className="ticket-body">
                <p className="text-sm font-semibold">
                  Order #<span>FET546UE5U4ITYI4R</span>
                </p>
                <p className="text-sm font-semibold">
                  <span className="time">12:18</span>
                  <span className="date">06 MAR 2024</span>
                </p>
                <p className="text-sm font-semibold">
                  NUMBER OF TICKETS: <span>1</span>
                </p>
                <hr />
                <h4 className="price flex justify-between">
                  <p className="font-semibold">PAID</p>
                  <span>
                    R<span>100</span>
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
