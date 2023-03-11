import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
const { Email } = require("../models/email.model");
require("dotenv").config();

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    const { to, subject, text } = req.body as Email;
    const msg = {
      to,
      from: process.env.mailer,
      subject,
      text,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email : " + err });
  }
};
