import express from "express"
import { config } from "dotenv";

// load .env contents into process.env
config()

const app = express();

// middlewares
app.use(express.json())

// connections and listeners
app.listen(5000, () => console.log("Server running on port 5000"))