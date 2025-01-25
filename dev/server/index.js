import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ msg: "API health is ok ok", success: true });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
