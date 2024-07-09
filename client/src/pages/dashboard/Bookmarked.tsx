/** @format */

import React from "react";
import SideNav from "../../components/SideNav";
import Header from "../../components/Header";
import EventComponent from "../../components/EventComponent";
import Footer from "../../components/Footer";

const Bookmarked = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container flex gap-16">
        <SideNav />
        <div className="dashboard-content my-24">
          <h1 className="text-2xl font-bold mb-4">Bookmarked</h1>
          <div className="events-container flex flex-col gap-4">
            <EventComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookmarked;
