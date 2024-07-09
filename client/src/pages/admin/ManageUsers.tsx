/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  return (
    <>
      <h1>Manage Users</h1>

      <table>
        <thead>
          <th>User ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Link to="">Edit</Link> | <Link to="">Delete</Link>
          </td>
        </tbody>
      </table>
    </>
  );
};

export default ManageUsers;
