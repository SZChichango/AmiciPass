/** @format */

import pool from "../db";

export const createEvent = async (
  eventName: string,
  date: string,
  startTime: string,
  endTime: string,
  venue: string,
  address: string,
  organiser: string,
  description: string,
  image: string,
  category: string
) => {
  const result = await pool.query(
    "INSERT INTO events (event_name, date, start_time, end_time, venue, address, organiser, description, image, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
    [
      eventName,
      date,
      startTime,
      endTime,
      venue,
      address,
      organiser,
      description,
      image,
      category,
    ]
  );
  return result.rows[0];
};

// Find events based on parameters
export const findEvents = async (params: any) => {
  const {
    event_name,
    date,
    start_time,
    end_time,
    venue,
    address,
    organiser,
    category,
  } = params;
  let query = "SELECT * FROM events";
  if (event_name) {
    query += ` WHERE event_name = '${event_name}'`;
  }
  if (date) {
    query += ` WHERE date = '${date}'`;
  }
  if (start_time) {
    query += ` WHERE start_time = '${start_time}'`;
  }
  if (end_time) {
    query += ` WHERE end_time = '${end_time}'`;
  }
  if (venue) {
    query += ` WHERE venue = '${venue}'`;
  }
  if (address) {
    query += ` WHERE address = '${address}'`;
  }
  if (organiser) {
    query += ` WHERE organiser = '${organiser}'`;
  }
  if (category) {
    query += ` WHERE organiser = '${category}'`;
  }
  const result = await pool.query(query);
  return result.rows;
};
export const deleteEvent = async (id: number) => {
  const result = await pool.query(
    "DELETE FROM events WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
export const updateEvent = async (
  id: string,
  eventName: string,
  date: string,
  startTime: string,
  endTime: string,
  venue: string,
  address: string,
  organiser: string
) => {
  const result = await pool.query(
    "UPDATE events SET event_name = $1, date = $2, start_time = $3, end_time = $4, venue = $5, address = $6, organiser = $7 WHERE id = $8 RETURNING *",
    [eventName, date, startTime, endTime, venue, address, organiser, id]
  );
  return result.rows[0];
};
export const getEvent = async (id: number) => {
  const result = await pool.query("SELECT * FROM events WHERE id = $1", [id]);
  return result.rows[0];
};
