import { UserModel } from "../models";
import { EmailOptions } from "../types.def";
import {
  AsyncWrapper,
  ComparePassword,
  GenerateTokenAndSetCookie,
  HashPassword,
  SuccessMessage,
  transporter,
  VerifyEmailToken,
  verifyTemplate,
} from "../utils";
import { Request, Response } from "express";


export const SignUpUserApi = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  const findUser = await UserModel.findOne({ email });

  if (findUser) {
    if (!findUser.isVerified) {
      return res.status(200).json({ message: SuccessMessage.ACCOUNT_NOT_VERIFIED });
    }
    return res.status(200).json({ message: SuccessMessage.ACCOUNT_ALREADY_REGISTERED });
  }

  const hashPassword = await HashPassword(password);
  const verificationToken = VerifyEmailToken(email);
  const verificationTokenExpiration = new Date(Date.now() + 5 * 60 * 1000);
  const verificationLink = `${process.env.ORIGIN}/verify/${verificationToken}`;

  const user = new UserModel({
    email,
    password: hashPassword,
    username,
    verificationToken,
    verificationTokenExpiration,
  });
  await user.save();

  const mailOptions: EmailOptions = {
    from: process.env.SMPT_EMAIL,
    to: email,
    subject: "Email Verification",
    html: verifyTemplate(verificationLink, username),
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: SuccessMessage.ACCOUNT_REGISTERED_VERIFY_PENDING });
});

export const VerifyUserEmailApi = AsyncWrapper(async (req: Request, res: Response) => {
  const user = req.user;

  const findUser = await UserModel.findOne({ email: user });
  if (findUser?.isVerified) {
    return res.status(200).json({ message: SuccessMessage.ACCOUNT_ALREADY_VERIFIED });
  }

  const VerifyUser = await UserModel.findOneAndUpdate(
    { email: user },
    {
      isVerified: true,
      verificationToken: null,
      verificationTokenExpiration: null,
    }
  );

  if (findUser && VerifyUser) {
    GenerateTokenAndSetCookie(findUser._id, res);
    res.status(200).json({ message: SuccessMessage.EMAIL_VERIFIED_SUCCESS });
  }
});

export const SignInUserApi = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const findUser = await UserModel.findOne({ email });

  switch (true) {
    case !findUser:
      return res.status(400).json({ message: SuccessMessage.INVALID_EMAIL_ID });
    case !findUser?.isVerified:
      return res.status(200).json({ message: SuccessMessage.ACCOUNT_NOT_VERIFIED });
    case findUser?.isBlocked:
      return res.status(200).json({ message: SuccessMessage.ACCOUNT_BLOCKED });
    case !findUser?.isActive:
      return res.status(200).json({ message: SuccessMessage.ACCOUNT_DEACTIVATED });
    default:
      const compare = await ComparePassword(password, findUser.password);

      if (!compare) {
        return res.status(400).json({ message: SuccessMessage.INVALID_PASSWORD });
      }
      GenerateTokenAndSetCookie(findUser._id, res);

      return res.status(200).json({ message: SuccessMessage.LOGIN_SUCCESS });
  }
});


export const VerifyUserApi = AsyncWrapper(async (req: Request, res: Response) => {
  res.status(200).send({ userId: req.userId });
});


export const SignOutUserApi = AsyncWrapper(async (req: Request, res: Response) => {});


export const ResetPasswordApi = AsyncWrapper(async (req: Request, res: Response) => {});
