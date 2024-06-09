import jwt from "jsonwebtoken";
import { Response } from "express";

export const VerifyEmailToken = (email: string) => {
  const token = jwt.sign({ email }, process.env.JWT_EMAIL_TOKEN, {
    expiresIn: "30m",
  });
  return token;
};

export const GenerateTokenAndSetCookie = (userId:unknown, res:Response) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("social-media-app", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
};