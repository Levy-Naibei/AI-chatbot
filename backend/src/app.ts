import express from "express"
import { config } from "dotenv";
import morgan from "morgan"
import appRouter from "./routes/index.js";

// load .env contents into process.env
config()

const app = express();

// in dev only
app.use(morgan("dev"))

// register routes
app.use("/api/v1", appRouter);

// middlewares
app.use(express.json())

export default app;