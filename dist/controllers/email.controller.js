"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
require("dotenv").config();
const sendEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req.body : ", req.body);
        const { name, email, message } = req.body;
        console.log("Checking environment variables:", process.env.MAILER);
        const msg = {
            to: "contact@kbezzouh.com",
            from: process.env.MAILER,
            subject: `New email from ${name} `,
            text: `${email} sent you an email : \n\n${message}`,
        };
        console.log("Checking msg object:", msg);
        yield mail_1.default
            .send(msg)
            .then((response) => {
            console.log("It works ! Status code : ", response[0].statusCode);
            console.log("Headers : ", response[0].headers);
        })
            .catch((error) => {
            console.error("Error : ", error);
        });
        res.status(200).json({ message: "Email sent successfully." });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error sending email : " + err });
    }
});
exports.sendEmail = sendEmail;
