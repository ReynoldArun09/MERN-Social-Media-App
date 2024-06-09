import { Router } from "express";
import * as auth from '../controllers/auth.controller'
import { AuthMiddleware, EmailVerifyMiddleware, ValidationMiddleware } from "../middleware";
import { SignInSchema, SignUpSchema } from "../utils";

export const AuthRoutes = Router()

AuthRoutes.post('/sign-up-user', ValidationMiddleware(SignUpSchema), auth.SignUpUserApi)
AuthRoutes.post('/sign-in-user', ValidationMiddleware(SignInSchema), auth.SignInUserApi)
AuthRoutes.get('/verify-user', AuthMiddleware, auth.VerifyUserApi)
AuthRoutes.post('/reset-password', auth.ResetPasswordApi)
AuthRoutes.post('/sign-out-user', auth.SignOutUserApi)
AuthRoutes.get('/verify-email/:token', EmailVerifyMiddleware, auth.VerifyUserEmailApi)