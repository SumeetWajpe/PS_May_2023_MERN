import express, { Request, Response, Router } from "express";
// import { courses } from "../models/course.model";
let courses = [
  {
    id: 1,
    title: "React",
    price: 5000,
    likes: 400,
    rating: 5,
    trainerName: "Joe Philip",
    avatarUrl: "https://i.pravatar.cc/300",
    imageUrl:
      "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.",
  },
  {
    id: 2,
    title: "Redux",
    price: 4000,
    likes: 600,
    rating: 5,
    trainerName: "Rachana Ranade",
    avatarUrl: "https://i.pravatar.cc/300",
    imageUrl: "https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
  },
  {
    id: 3,
    title: "Node",
    price: 6000,
    likes: 900,
    rating: 4,
    trainerName: "Sujit Kalamkar ",
    avatarUrl: "https://i.pravatar.cc/300",
    imageUrl:
      "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1",
    description:
      "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
  },
  {
    id: 4,
    title: "Angular",
    price: 5000,
    likes: 200,
    rating: 3,
    trainerName: "Tim Hawk",
    avatarUrl: "https://i.pravatar.cc/300",
    imageUrl:
      "https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/7fad34d867a32f732b37534ff013e916-3-2.jpg",
    description:
      "Angular is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.",
  },
  {
    id: 5,
    title: "Flutter",
    price: 7000,
    likes: 700,
    rating: 4,
    trainerName: "Sachin Mili",
    avatarUrl: "https://i.pravatar.cc/300",
    imageUrl: "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
    description:
      "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. First described in 2015, Flutter was released in May 2017.",
  },
];
const router: Router = express.Router();

router.get("/courses", (req: Request, res: Response) => {
  res.json(courses);
});

router.get("/courses/:id", (req: Request, res: Response) => {
  let { id } = req.params;
  // find the course & return
  let theCourse = courses.find(c => c.id === Number(id));
  res.json(theCourse);
});

router.post("/newcourse", (req: Request, res: Response) => {
  let newCourse = req.body;
  courses.push(newCourse);
  res.json({ msg: "Course deleted successfully !", status: true, newCourse });
});

export default router;
