import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const mongoConnectionString = process.env.MONGO_URI || "";
export const JWT_SECRET = process.env.JWT_SECRET;
