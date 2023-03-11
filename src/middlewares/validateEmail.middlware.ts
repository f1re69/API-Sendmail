import { Request, Response, NextFunction } from "express";

export const validateEmail = (
  req: Request,
  res: Response<any, Record<string, any>>,
  next
): void => {
  const { to, subject, text } = req.body;
  if (!to || !subject || !text) {
    res.status(400).json({ message: "Please provide all required fields." });
  }
  next();
};
