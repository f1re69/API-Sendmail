import { Router } from "express";
import { sendEmail } from "../controllers/email.controller";

const router = Router();

router.post("/", sendEmail);
// router.get("/weather", getWeatherData); // Nouvelle route

export default router;
