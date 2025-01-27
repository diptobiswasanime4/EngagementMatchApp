import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
} from "./controller/authController.js";
import { PORT, mongoConnectionString } from "./config/config.js";

const app = express();

app.use(express.json());
app.use(cors());

// DB connection
mongoose
  .connect(mongoConnectionString)
  .then(() => console.log("DB connection is a success!"))
  .catch((err) => console.log("Failed to connect to DB. Error:", err));

app.get("/health", (req, res) => {
  res.json({ msg: "API health is ok ok", success: true });
});

app.post("/register", registerUser);

app.post("/login", loginUser);

app.post("/logout", logoutUser);

app.get("/profile", getProfile);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
