import { Router } from "express";
import { signup } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post("/signup", signup) // base_url/api/v1/user/signup

export default userRoutes;
