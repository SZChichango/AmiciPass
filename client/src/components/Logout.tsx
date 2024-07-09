/** @format */
import axios from "axios";

export const handleLogout = () => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  window.location.href = "/login";
};
