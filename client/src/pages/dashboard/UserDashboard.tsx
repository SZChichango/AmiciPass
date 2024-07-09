/** @format */

// Import your Profile component

import "rsuite/dist/rsuite.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBookBookmark,
//   faMessage,
//   faReceipt,
//   faTicketAlt,
//   faUserAlt,
// } from "@fortawesome/free-solid-svg-icons";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Footer />
    </>
  );
};

export default UserDashboard;
