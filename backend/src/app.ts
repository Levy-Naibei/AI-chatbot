import express from "express"
import { config } from "dotenv";
import morgan from "morgan"
import appRouter from "./routes/index.js";

// load .env contents into process.env
config()

const app = express();

// middlewares
// this middleware should be on first 
// line after express app initialization
app.use(express.json())

// in dev only
app.use(morgan("dev"))

// register routes
app.use("/api/v1", appRouter);

export default app;
