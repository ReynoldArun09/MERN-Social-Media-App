import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils";


export const ErrorMiddleware: ErrorRequestHandler = (error, req, res, next) => {
    const statusCode = error.statusCode ?? 500;

  if (error instanceof ZodError) {
    return res.status(statusCode).json({ message: error.flatten().fieldErrors });
  }

  if (error instanceof AppError) {
    return res.status(statusCode).json({ message: error.message });
  }


  return res.status(statusCode).json({ message: error.message });
}