/** @format */

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./eventsDetailPage.css";
import { faBookBookmark, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const EventDetailsPage = () => {
  return (
    <>
      <Header />
      <main className="tkt-page-container p-4">
        <main className="page-container">
          <div className="event grid grid-cols-2 gap-8">
            <div className="img-ctn">
              <img src="https://picsum.photos/500/300" alt="" />
            </div>
            <div className="event-info flex flex-col gap-2">
              <h1>Major vibes Party</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem laboriosam aperiam ullam blanditiis quidem facilis
                necessitatibus! Aspernatur quo iste cumque. Aperiam, delectus
                laudantium. Rem ab cupiditate esse aliquam modi exercitationem
                quas ad in animi rerum, aut iusto vel doloremque reiciendis
                recusandae quam fuga repudiandae necessitatibus earum officiis
                dolore itaque ullam.
              </p>
              <h3>R100.00</h3>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" />
              <div className="buy btns">
                <button>Buy tickets</button>
                <button>
                  <FontAwesomeIcon icon={faBookBookmark} />
                </button>
              </div>
            </div>
          </div>
          <div className="discounts-container flex flex-col gap-8 mt-4">
            <h1>Discounts</h1>
            <div className="discounts-options grid grid-cols-2 ">
              <div className="social-media-follow">
                <h2 className="mb-2">
                  Get 10% Discount By Followiing Us On...
                </h2>
                <div className="social-buttons flex gap-4">
                  <button>
                    <FontAwesomeIcon icon={faYoutube} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faFacebook} />
                  </button>
                </div>
              </div>
              <div className="referall-discount">
                <h2 className="mb-2">
                  Get Up To 50% By Using Your Referral Link...
                </h2>
                <div className="referall-link">
                  <div className="flex shadow-sm">
                    <input
                      value="Copy Me"
                      className="py-1 indent-2 rounded-s-lg focus:outline-none"
                      name="text"
                      type="text"
                    />
                    <button className="py-1 rounded-e-lg text-white bg-green-300 flex justify-center items-center w-10 h-10">
                      <FontAwesomeIcon icon={faCopy} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
      <Footer />
    </>
  );
};

export default EventDetailsPage;
