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
