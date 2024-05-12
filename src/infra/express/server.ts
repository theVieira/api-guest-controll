import express from "express";
import { config } from "dotenv";
config();

import { router } from "./router";
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log("server running"));
