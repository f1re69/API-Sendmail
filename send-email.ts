const express = require("express");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(express.json());
// Set the SendGrid API key
sgMail.setApiKey(
  "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"
);

// Define the POST endpoint for sending emails
app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const msg = {
      to,
      from: "mailer@kbezzouh.com", // Change to your verified sender
      subject,
      text,
    };

    // Send the email using the SendGrid module
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3456;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
