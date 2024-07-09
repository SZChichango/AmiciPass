/** @format */

import React from "react";
import HeaderOrg from "../../components/organisers/HeaderOrg";
import SideNavOrg from "../../components/organisers/SideNavOrg";

const CreateEvent = () => {
  return (
    <>
      <HeaderOrg />
      <SideNavOrg />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Create Event</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEvent;
