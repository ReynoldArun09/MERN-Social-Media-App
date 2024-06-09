import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import { AuthRoutes } from "./routes";
import { ErrorMiddleware } from "./middleware";
import cookieParser from "cookie-parser";

const app: Application = express();
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.ORIGIN || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser())
app.use(morgan("common"));

app.use("/api/v1/auth", AuthRoutes);

app.use(ErrorMiddleware);

export default app;
