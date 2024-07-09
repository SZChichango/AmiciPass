/** @format */

import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import "./dashboard.css";
const ProfilePage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  useEffect(() => {
    // Fetch user data (replace with your API call or data source)
    const fetchUserData = async () => {
      // Example: replace with actual data fetching logic
      const storedUser = JSON.parse(localStorage.getItem("user")) || {
        username: "johndoe",
        email: "john@example.com",
        fullName: "John Doe",
        phoneNumber: "123-456-7890",
      };
      setUserData(storedUser);
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="dashboard-container form flex gap-16">
        <SideNav />
        <div className="dashboard-content py-24">
          <h1 className="text-2xl font-bold mb-8">Profile Information</h1>
          <form action="" method="post" className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="fullName">Name</label>
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={userData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={userData.username}
                readOnly // Make the username non-editable
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
