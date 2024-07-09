/** @format */

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByUsername,
  getAllUsers,
} from "../models/userModel";

export const register = async (req: Request, res: Response) => {
  const { name, username, email, dob, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(name, username, email, dob, hashedPassword);
  res.json(user);
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByUsername(email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user.id }, "your_jwt_secret");
  res.json({ token });
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await fetchUsers();
  if (!users) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
};
