"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
const validateEmail = (req, res, next) => {
    const { to, subject, text } = req.body;
    if (!to || !subject || !text) {
        res.status(400).json({ message: "Please provide all required fields." });
    }
    next();
};
exports.validateEmail = validateEmail;
