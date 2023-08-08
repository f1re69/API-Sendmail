import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import axios from "axios";
import { Email } from "../models/email.model";
require("dotenv").config();

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  try {
    const { name, email, message, recaptchaResponse } = req.body as Email & {
      recaptchaResponse: string;
    };
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

    const verification = await axios.post(verifyURL);
    const { success } = verification.data;

    if (!success) {
      res.status(400).json({ message: "reCAPTCHA validation failed" });
      return;
    }

    const msg = {
      to: "contact@kbezzouh.com",
      from: process.env.MAILER,
      subject: `New email from ${name} `,
      text: `${email} sent you an email : \n\n${message}`,
    };

    await sgMail
      .send(msg)
      .then((response) => {
        console.log("It works ! Status code : ", response[0].statusCode);
        console.log("Headers : ", response[0].headers);
        res.status(200).json({ message: "Email sent successfully." });
      })
      .catch((error) => {
        console.error("Error : ", error);
        if (
          error.response &&
          error.response.body &&
          error.response.body.errors
        ) {
          console.error("SendGrid Errors: ", error.response.body.errors);
        }
        res.status(500).json({ message: "Error sending email via SendGrid." });
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email : " + err });
  }
};
