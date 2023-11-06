import { Request, Response, NextFunction } from "express"
import User from '../models/user.js'
import { compare, hash } from "bcrypt";

// register user controller
export const signup = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const { email, name, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).send("User already exist!")
        } else {
            const newUser = new User({ email, name, password: hashedPassword });
            await newUser.save()
            return res.status(201).json({ message: "Register sucess!", id: newUser._id.toString() })
        }

    } catch (error) {
        console.log(error?.message);
        return res.status(200).json({ message: "ERROR", cause: error?.message })
    }
}

// login user controller
export const login = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).send("User does not exist!");
        }
        const isCorrectPass = await compare(password, user.password);
        if (!isCorrectPass) {
            return res.status(403).send("Incorect password")
        } else {
            return res.status(200).json({ message: "Login success!", id: user._id.toString() });
        }

    } catch (error) {
        console.log(error?.message);
        return res.status(200).json({ message: "ERROR", cause: error?.message })
    }
}

// fetch users from db
export const getUsers = async (_: any, res: Response) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error?.message })
    }
}

// // fetch single user
// export const getUser = (id: string) => {

// }

// // delete user - only by admin
// export const deleteUser = (id: string) => {

// }
