import { NextFunction, Request, Response } from "express";
import { AsyncWrapper } from "../utils";
import jwt, { JwtPayload } from "jsonwebtoken";

export const AuthMiddleware = AsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["social-media-app"];

  if (!token) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

  if (!decodedToken) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  req.userId = (decodedToken as JwtPayload).userId;
  next();
});
