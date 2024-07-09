/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import UserDashboard from "./pages/dashboard/UserDashboard";
import EventCreation from "./pages/organisers/EventCreation";
import PrivateRoute from "./components/PrivateRoutes";
import ProfilePage from "./pages/dashboard/Profile";
import Tickets from "./pages/dashboard/Tickets";
import Orders from "./pages/dashboard/Orders";
import Bookmarked from "./pages/dashboard/Bookmarked";
import Communications from "./pages/dashboard/Communications";
import DashboardOrg from "./pages/organisers/DashboardOrg";
import CreateEvent from "./pages/organisers/CreateEvent";
import ManageEvents from "./pages/organisers/ManageEvents";
import EventsOrders from "./pages/organisers/EventsOrders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<UserDashboard />} />
        </Route>

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<ProfilePage />} />
        </Route>
        <Route path="/tickets" element={<PrivateRoute />}>
          <Route path="" element={<Tickets />} />
        </Route>
        <Route path="/orders" element={<PrivateRoute />}>
          <Route path="" element={<Orders />} />
        </Route>
        <Route path="/bookmarked" element={<PrivateRoute />}>
          <Route path="" element={<Bookmarked />} />
        </Route>
        <Route path="/communications" element={<PrivateRoute />}>
          <Route path="" element={<Communications />} />
        </Route>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event" element={<EventDetailsPage />} />
        <Route path="/event_creation" element={<EventCreation />} />
        <Route path="/dashboard_org" element={<DashboardOrg />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/manage_events" element={<ManageEvents />} />
        <Route path="/events_orders" element={<EventsOrders />} />
      </Routes>
    </Router>
  );
};

export default App;
