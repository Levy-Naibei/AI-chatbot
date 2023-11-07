import { Request, Response, NextFunction } from "express";
import User from '../models/user.js';
import { compare, hash } from "bcrypt";
import { generateToken } from "../utils/tokenGen.js";
import { COOKIE_NAME } from "../utils/constants.js";

// register user controller
export const signup = async(
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const { email, name, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = await User.findOne({ email: email });
        if (user) {
            return res.status(401).send("User already exist!");
        } else {
            const newUser = new User({ email, name, password: hashedPassword });
            await newUser.save()

            // clear cookie
            res.clearCookie(COOKIE_NAME,
                {
                    path: '/',
                    domain: 'localhost',
                    httpOnly: true,
                    signed: true
                }
            );
    
            // generate token and store cookie
            const token = generateToken(user._id.toString(), user.email, "7d");
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            res.cookie(
                process.env.COOKIE_NAME,
                token,
                {
                    path: '/',
                    domain: 'localhost',
                    expires,
                    httpOnly: true,
                    signed: true
                }
            );
            return res.status(201).json({ message: "Register sucess!", id: newUser._id.toString() })
        }
    } catch (error) {
        console.log(error?.message);
        return res.status(200).json({ message: "ERROR", cause: error?.message })
    }
}

// login user controller
export const login = async(
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
        } 

        res.clearCookie(COOKIE_NAME,
            {
                path: '/',
                domain: 'localhost',
                httpOnly: true,
                signed: true
            }
        );

        // generate token and store cookie
        const token = generateToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        res.cookie(
            COOKIE_NAME,
            token,
            {
                path: "/",
                domain: "http://localhost:5000",
                expires,
                httpOnly: true, //Cookie is accessible only through HTTP(S) requests, not JavaScript
                signed: true
            }
        );
        return res.status(200).json({ message: "Login success!", id: user._id.toString() });
    } catch (error) {
        console.log(error?.message);
        return res.status(200).json({ message: "ERROR", cause: error?.message })
    }
}

// fetch users from db
export const getUsers = async(_: any, res: Response) => {
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
