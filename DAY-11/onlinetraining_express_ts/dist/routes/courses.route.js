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
const express_1 = __importDefault(require("express"));
const course_model_1 = require("../models/course.model");
const router = express_1.default.Router();
router.get("/courses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let courses = yield course_model_1.Course.find({}); // select * from
        res.json(courses);
    }
    catch (error) {
        console.log(error);
    }
}));
router.get("/courses/:id", (req, res) => {
    let { id } = req.params;
    // find the course & return
    // let theCourse = courses.find(c => c.id === Number(id));
    // res.json(theCourse);
});
router.post("/newcourse", (req, res) => {
    let newCourse = req.body;
    // courses.push(newCourse);
    res.json({ msg: "Course deleted successfully !", status: true, newCourse });
});
exports.default = router;
