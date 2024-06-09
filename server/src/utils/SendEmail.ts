import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMPT_EMAIL,
    pass: process.env.SMPT_PASSWORD,
  }
});
