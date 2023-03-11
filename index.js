// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
const msg = {
  to: "kbezzouh@gmail.com", // Change to your recipient
  from: "mailer@kbezzouh.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
