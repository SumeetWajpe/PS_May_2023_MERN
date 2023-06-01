"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const course_model_1 = require("../models/course.model");
const router = express_1.default.Router();
router.get("/courses", (req, res) => {
    res.json(course_model_1.courses);
});
exports.default = router;
