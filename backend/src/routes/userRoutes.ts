import { Router } from "express";
import { getUsers, getUser, deleteUser } from "../controllers/userControllers.js";

const userRoutes = Router();

userRoutes.get('/', getUsers);
userRoutes.get('/id', getUser);
userRoutes.delete('/id', deleteUser);  // must have admin permission

export default userRoutes;