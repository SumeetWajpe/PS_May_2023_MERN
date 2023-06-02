"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = __importDefault(require("json"));
const isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization; // Bearer token
    const token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    json_1.default.verify(token, process.env.SECRECT_KEY, (err, decodedToken) => {
        if (err)
            res.status(500).json({ err: "Invalid Token" });
        console.log(token);
    });
    res.json({ msg: "success" });
};
