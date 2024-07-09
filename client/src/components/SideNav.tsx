/** @format */

import { Container, Sidebar, Sidenav, Content, Navbar, Nav } from "rsuite";
import { Link, BrowserRouter as Router } from "react-router-dom";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import TicketIcon from "@rsuite/icons/legacy/Ticket";
import "rsuite/dist/rsuite.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faMessage,
  faReceipt,
  faTicketAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SideNav = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div className="show-fake-browser sidebar-page py-8">
      <Container>
        <Sidebar
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div
              style={{
                padding: 18,
                fontSize: 16,
                height: 56,
                background: "#fefefe",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span style={{ marginLeft: 12 }}>BRAND</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Dashboard
                </Nav.Item>
                <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="Tickets"
                  icon={<TicketIcon />}
                  placement="rightStart"
                >
                  <Nav.Item
                    eventKey="3-1"
                    icon={<FontAwesomeIcon icon={faTicketAlt} />}
                  >
                    <Link to="/tickets">All Tickets</Link>
                  </Nav.Item>
                  <Nav.Item
                    eventKey="3-2"
                    icon={<FontAwesomeIcon icon={faReceipt} />}
                  >
                    <Link to="/orders">Orders</Link>
                  </Nav.Item>
                  <Nav.Item
                    eventKey="3-3"
                    icon={<FontAwesomeIcon icon={faBookBookmark} />}
                  >
                    <Link to="/bookmarked">Bookmarked</Link>
                  </Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<GearCircleIcon />}
                  placement="rightStart"
                >
                  <Nav.Item
                    eventKey="4-1"
                    icon={<FontAwesomeIcon icon={faUserAlt} />}
                  >
                    <Link to="/profile">Profile</Link>
                  </Nav.Item>
                  <Nav.Item
                    eventKey="4-2"
                    icon={<FontAwesomeIcon icon={faMessage} />}
                  >
                    <Link to="/communications">Communications</Link>
                  </Nav.Item>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
              <Nav.Menu
                noCaret
                placement="topStart"
                trigger="click"
                title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
              >
                <Nav.Item>Help</Nav.Item>
                <Nav.Item>Settings</Nav.Item>
                <Nav.Item>Sign out</Nav.Item>
              </Nav.Menu>
            </Nav>
            <Nav pullRight>
              <Nav.Item
                onClick={() => setExpand(!expand)}
                style={{ width: 56, textAlign: "center" }}
              >
                {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
              </Nav.Item>
            </Nav>
          </Navbar>
        </Sidebar>

        <Container>
          <Content></Content>
        </Container>
      </Container>
    </div>
  );
};

export default SideNav;
