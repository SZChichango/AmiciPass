/** @format */

import { Request, Response } from "express";

export const createEvent = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Event created successfully",
  });
export const getEvent = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Event retrieved successfully",
  });
export const updateEvent = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Event updated successfully",
  });
export const deleteEvent = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Event deleted successfully",
  });
export const getEvents = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUser = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUserAndDate = async (Req: Request, Res: Response) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUserAndDateAndTime = async (
  Req: Request,
  Res: Response
) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUserAndDateAndTimeAndLocation = async (
  Req: Request,
  Res: Response
) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUserAndDateAndTimeAndLocationAndCategory = async (
  Req: Request,
  Res: Response
) =>
  Res.status(200).json({
    message: "Events retrieved successfully",
  });
export const getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescription =
  async (Req: Request, Res: Response) =>
    Res.status(200).json({
      message: "Events retrieved successfully",
    });
export const getEventsByUserAndDateAndTimeAndLocationAndCategoryAndDescriptionAndPrice =
  async (Req: Request, Res: Response) =>
    Res.status(200).json({
      message: "Events retrieved successfully",
    });
