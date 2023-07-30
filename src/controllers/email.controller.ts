import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import { Email } from "../models/email.model";
require("dotenv").config();

export const sendEmail = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log("req.body : ", req.body);
    const { name, email, message } = req.body as Email;
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
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
    res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email : " + err });
  }
};
