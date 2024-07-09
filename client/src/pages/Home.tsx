/** @format */
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../components/events.css";
import "../components/footer.css";
import Events from "../components/Events";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Events />
      <Upcoming />
      <main className="categories p-4 flex flex-col">
        <div className="title-header-container mb-9 flex items-center justify-between">
          <div className="title-container">
            <h1 className="text-2xl">Categories</h1>
            <p>Events based on their category</p>
          </div>
          <Link to="/">
            See All <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
        <div className="categories-container flex  gap-8">
          <div className="">
            <img src="https://placebeard.it/640x360" />
          </div>
          <div className="">
            <img src="https://placebeard.it/640x360" />
          </div>
          <div className="">
            <img src="https://placebeard.it/640x360" />
          </div>
          <div className="">
            <img src="https://placebeard.it/640x360" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
