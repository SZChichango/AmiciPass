/** @format */

import pool from "../db";

export const createUser = async (
  name: string,
  username: string,
  email: string,
  dob: string,
  hashedPassword: string
) => {
  const result = await pool.query(
    "INSERT INTO users (name, username, email, dob, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [name, username, email, dob, hashedPassword]
  );
  return result.rows[0];
};

export const findUserByUsername = async (username: string) => {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);
  return result.rows[0];
};

export const getAllUsersUsers = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows[0];
};
