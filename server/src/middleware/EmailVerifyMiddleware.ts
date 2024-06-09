import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const EmailVerifyMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.params.token;
  try {
    if (!token) {
      return res.status(400).json({ message: "Token is required" });
    }

    const findUser = await UserModel.findOne({ verificationToken: token });

    if (!findUser || findUser.verificationTokenExpiration! < new Date()) {
    }

    const verifyToken = jwt.verify(token, process.env.JWT_EMAIL_TOKEN);


    if (!verifyToken) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    req.user = (verifyToken as JwtPayload).email;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};