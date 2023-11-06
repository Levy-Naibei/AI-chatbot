import { Router } from "express";
import { signup, login } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post("/signup", signup) // base_url/api/v1/user/signup
userRoutes.post("/login", login) // base_url/api/v1/user/login

export default userRoutes;
