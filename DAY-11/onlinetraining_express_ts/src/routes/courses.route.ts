import express, { Request, Response, Router } from "express";
import { Course } from "../models/course.model";

const router: Router = express.Router();

router.get("/courses", async (req: Request, res: Response) => {
  try {
    let courses = await Course.find({}); // select * from
    res.json(courses);
  } catch (error) {
    console.log(error);
  }
});

router.get("/courses/:id", (req: Request, res: Response) => {
  let { id } = req.params;
  // find the course & return
  // let theCourse = courses.find(c => c.id === Number(id));
  // res.json(theCourse);
});

router.post("/newcourse", (req: Request, res: Response) => {
  let newCourse = req.body;
  // courses.push(newCourse);
  res.json({ msg: "Course deleted successfully !", status: true, newCourse });
});

export default router;
