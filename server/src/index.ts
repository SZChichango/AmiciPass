/** @format */

import express from "express";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import eventsRoutes from "./routes/eventsRoutes";


const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", eventsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
