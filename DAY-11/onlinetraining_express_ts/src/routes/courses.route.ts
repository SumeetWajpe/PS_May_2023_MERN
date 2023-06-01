import express, { Request, Response, Router } from "express";
import { courses } from "../models/course.model";
const router: Router = express.Router();

router.get("/courses", (req: Request, res: Response) => {
  res.json(courses);
});

export default router;
