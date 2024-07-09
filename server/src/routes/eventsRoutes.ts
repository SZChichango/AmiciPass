/** @format */

import { Router } from "express";
import {
  createEvent,
  getEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  getEventsByUser,
  getEventsByUserAndDate,
  getEventsByUserAndDateAndTime,
  getEventsByUserAndDateAndTimeAndLocation,
  getEventsByUserAndDateAndTimeAndLocationAndCategory,
  getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescription,
  getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescriptionAndPrice,
} from "../controllers/eventController";

const router = Router();

router.post("/create-event", createEvent);
router.get("/get-event/:id", getEvent);
router.get("/get-events", getEvents);
router.get("/get-events-by-user", getEventsByUser);
router.get("/get-events-by-user-and-date", getEventsByUserAndDate);
router.get(
  "/get-events-by-user-and-date-and-time",
  getEventsByUserAndDateAndTime
);
router.get(
  "/get-events-by-user-and-date-and-time-and-location",
  getEventsByUserAndDateAndTimeAndLocation
);
router.get(
  "/get-events-by-user-and-date-and-time-and-location-and-category",
  getEventsByUserAndDateAndTimeAndLocationAndCategory
);
router.get(
  "/get-events-by-user-and-date-and-time-and-location-and-category-and-description",
  getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescription
);
router.get(
  "/get-events-by-user-and-date-and-time-and-location-and-category-and-description-and-price",
  getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescriptionAndPrice
);
router.put("/update-event/:id", updateEvent);
router.delete("/delete-event/:id", deleteEvent);

export default router;
