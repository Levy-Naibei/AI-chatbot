import { Router } from "express";
import { signup, login, getUsers } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.post("/signup", signup) // base_url/api/v1/user/signup
userRoutes.post("/login", login) // base_url/api/v1/user/login
userRoutes.get('/', getUsers);
// userRoutes.get('/id', getUser);
// userRoutes.delete('/id', deleteUser);  // must have admin permission

export default userRoutes;
