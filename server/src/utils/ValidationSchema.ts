
import { z } from "zod";

export const SignUpSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is Required" }).email({ message: "Invalid email address" }),
    username: z.string({ required_error: "Username is Required" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
  }),
});

export const SignInSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "Email is Required" }).email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
  }),
});

