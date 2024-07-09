/** @format */

import React from "react";
import SideNav from "../../components/SideNav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Toggle } from "rsuite";
const Communications = () => {
  return (
    <>
      <Header />
      <div className="dashboard-container flex gap-16">
        <SideNav />
        <div className="dashboard-content my-24">
          <h1 className="text-2xl font-bold mb-4">Communications</h1>
          <div className="-container flex flex-col gap-4">
            <div className="stickers">
              <ul>
                <hr />
                <li className="sticker p-2 flex justify-between">
                  <div className="sticker-deatails">
                    <h2 className="p-0 m-0 font-semibold">AmiciPass</h2>
                    <p className="description">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="sticker-actions flex flex-col gap-4">
                    <div className="sticker-action__wrapper flex justify-between gap-2">
                      <label htmlFor="email-notification">Email</label>
                      <Toggle defaultChecked />
                    </div>
                    <div className="sticker-action__wrapper flex justify-between gap-2">
                      <label htmlFor="whatsapp-notification">WhatsApp</label>
                      <Toggle defaultChecked />
                    </div>
                  </div>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Communications;
