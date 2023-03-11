import express from "express";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import emailRoutes from "./routes/email"; // Import using ES6 syntax

const app = express();
app.use(express.json());

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

app.use("/send-email", emailRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 3456;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
