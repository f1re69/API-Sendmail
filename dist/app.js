"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const dotenv_1 = __importDefault(require("dotenv"));
const email_1 = __importDefault(require("./routes/email")); // Import using ES6 syntax
const app = (0, express_1.default)();
app.use(express_1.default.json());
dotenv_1.default.config();
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
app.use("/send-email", email_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
exports.default = app;
