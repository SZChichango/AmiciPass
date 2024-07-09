/** @format */

import React, { useState } from "react";
import { Container, Sidebar, Sidenav, Content, Navbar, Nav } from "rsuite";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import TicketIcon from "@rsuite/icons/legacy/Ticket";

import "rsuite/dist/rsuite.min.css"; // Ensure this is imported
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faMessage,
  faTicketAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons/faBookAtlas";
import { Link } from "react-router-dom";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#fefefe",
  color: "#0000",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <>
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
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

const SideNavOrg = () => {
  const [expand, setExpand] = useState(true);

  return (
    <>
      <Header />
      <div className="show-fake-browser sidebar-page py-8">
        <Container>
          <Sidebar
            style={{ display: "flex", flexDirection: "column" }}
            width={expand ? 260 : 56}
            collapsible
          >
            <Sidenav.Header>
              <div style={headerStyles}>
                <span style={{ marginLeft: 12 }}> BRAND</span>
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
                  <Nav.Item eventKey="2" icon={<GroupIcon />}>
                    Manage Events
                  </Nav.Item>
                  <Nav.Menu
                    color="rgba(225, 61, 88, 1)"
                    eventKey="3"
                    trigger="hover"
                    title="Events"
                    icon={<TicketIcon />}
                    placement="rightStart"
                  >
                    <Nav.Item
                      eventKey="3-1"
                      icon={<FontAwesomeIcon icon={faTicketAlt} />}
                      componentClass={Link}
                      to="/event_creation"
                    >
                      <Link to="/event_creation">Create Event</Link>
                    </Nav.Item>
                    <Nav.Item
                      eventKey="3-2"
                      icon={<FontAwesomeIcon icon={faBookAtlas} />}
                    >
                      Manage Events
                    </Nav.Item>
                    <Nav.Item
                      eventKey="3-3"
                      icon={<FontAwesomeIcon icon={faBookBookmark} />}
                    >
                      Bookmarked
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
                      Profile
                    </Nav.Item>
                    <Nav.Item
                      eventKey="4-2"
                      icon={<FontAwesomeIcon icon={faMessage} />}
                    >
                      Communications
                    </Nav.Item>
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
          </Sidebar>

          <Container>
            {/* <Header>
              <h2>Page Title</h2>
            </Header> */}
            <Content>Content</Content>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default SideNavOrg;
