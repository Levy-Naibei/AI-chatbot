import express from "express"
import { config } from "dotenv";

// load .env contents into process.env
config()

const app = express();

// middlewares
app.use(express.json())

export default app;