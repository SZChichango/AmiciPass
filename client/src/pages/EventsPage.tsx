/** @format */

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./eventsPage.css";

const EventsPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-container p-4 flex flex-col">
        <div className="page-header flex flex-col justify-center items-center mb-8 gap-4">
          <h1>Events</h1>
          <h3>
            <span>300</span> Events
          </h3>
          <div className="filter">
            <ul className="flex gap-8">
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/">This Week</Link>
              </li>
              <li>
                <Link to="/">This Month</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="events-container grid grid-cols-3 gap-4 item-center"
          onClick={() => (window.location.href = "/event")}
        >
          <div className="event">
            <div className="card shadow-sm">
              <div className="img">
                <div className="save">
                  <FontAwesomeIcon icon={faBookBookmark} />
                </div>
              </div>

              <div className="text">
                <p className="h3"> Party Anchor </p>
                <p className="p">Truth</p>
                <p className="p"> 23 September 2024 </p>
                <p className="price">
                  Price: R<span>250</span>
                </p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="card shadow-sm">
              <div className="img">
                <div className="save">
                  <FontAwesomeIcon icon={faBookBookmark} />
                </div>
              </div>

              <div className="text">
                <p className="h3"> Vibes Natural </p>
                <p className="p">Mxn Club</p>
                <p className="p"> 20 August 2024 </p>
                <p className="price">
                  Price: R<span>100.00</span>
                </p>
              </div>
            </div>
          </div>
          <div className="event">
            <div className="card shadow-sm">
              <div className="img">
                <div className="save">
                  <FontAwesomeIcon icon={faBookBookmark} />
                </div>
              </div>

              <div className="text">
                <p className="h3"> Major Party </p>
                <p className="p">Middle of Nowhere</p>
                <p className="p"> 25 July 2024 </p>
                <p className="price">
                  Price: R<span>100.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;
