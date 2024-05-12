import mongoose from "mongoose";
import { config } from "dotenv";

config();

const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error("DB_URL environment required");

mongoose
  .connect(DB_URL)
  .then(() => console.log("database connected"))
  .catch((error) => console.log("database connection error: " + error));

export { mongoose };
