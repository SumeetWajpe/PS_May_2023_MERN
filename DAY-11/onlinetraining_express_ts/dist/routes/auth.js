"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
router.post("/login", (req, res) => {
    // check user in db !
    // sign()
    // console.log(req.body);
    let payload = { name: "John Hammer", lastLogin: "Monday 25th" };
    jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY || "OtherSecretKey", { expiresIn: "2 Days" }, (err, token) => {
        if (err)
            console.log(err);
        else
            return res.json({ token });
    });
});
exports.default = router;
