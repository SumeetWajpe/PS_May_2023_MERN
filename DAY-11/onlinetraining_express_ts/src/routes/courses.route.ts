import express, { Request, Response, Router } from "express";
import { Course } from "../models/course.model";
import { isAuthenticated } from "../middleware/auth.middleware";

const router: Router = express.Router();

router.get("/courses", isAuthenticated, async (req: Request, res: Response) => {
  try {
    let courses = await Course.find({}); // select * from
    res.json(courses);
  } catch (error) {
    console.log(error);
  }
});

router.get(
  "/courses/:id",
  isAuthenticated,
  async (req: Request, res: Response) => {
    let { id } = req.params;

    // find the course & return
    let theCourse = await Course.findOne({ id });
    res.json(theCourse);
  },
);

router.post(
  "/newcourse",
  isAuthenticated,
  async (req: Request, res: Response) => {
    let newCourse = req.body;

    // create new instance of Mongoose Model
    let newCourseToBeInserted = new Course({ ...newCourse });
    await newCourseToBeInserted.save();
    res.json({ msg: "Course added successfully !", status: true, newCourse });
  },
);

router.delete(
  "/delete/:id",
  isAuthenticated,
  async (req: Request, res: Response) => {
    let { id } = req.params;
    await Course.deleteOne({ id });
    res.json({ msg: "Course deleted successfully !", status: true });
  },
);

export default router;
