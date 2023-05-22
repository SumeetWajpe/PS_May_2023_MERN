import React from "react";
import Course from "../course/course.component";
import { CourseModel } from "../../models/course.model";

export default function ListOfCourses() {
  let courses: CourseModel[] = [
    {
      id: 1,
      title: "React",
      price: 5000,
      likes: 400,
      rating: 5,
      imageUrl:
        "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
    },
    {
      id: 2,
      title: "Redux",
      price: 4000,
      likes: 600,
      rating: 5,
      imageUrl: "https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg",
    },
    {
      id: 3,
      title: "Node",
      price: 6000,
      likes: 900,
      rating: 4,
      imageUrl:
        "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1",
    },
    {
      id: 4,
      title: "Angular",
      price: 5000,
      likes: 200,
      rating: 3,
      imageUrl:
        "https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/7fad34d867a32f732b37534ff013e916-3-2.jpg",
    },
    {
      id: 5,
      title: "Flutter",
      price: 7000,
      likes: 700,
      rating: 4,
      imageUrl:
        "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
    },
  ];
  let coursesToBeCreated = courses.map(course => (
    <Course coursedetails={course} />
  ));
  return (
    <>
      <h1>List Of Courses</h1>
      <div className="row">{coursesToBeCreated}</div>
    </>
  );
}
// Class based Component
// import React from "react";
// import { CourseModel } from "../../models/course.model";
// import Course from "../course/course.component";

// export default class ListOfCourses extends React.Component<{}> {
//   courses: CourseModel[] = [
//     {
//       id: 1,
//       title: "React",
//       price: 5000,
//       likes: 400,
//       rating: 5,
//       imageUrl:
//         "https://ms314006.github.io/static/b7a8f321b0bbc07ca9b9d22a7a505ed5/97b31/React.jpg",
//     },
//     {
//       id: 2,
//       title: "Redux",
//       price: 4000,
//       likes: 600,
//       rating: 5,
//       imageUrl: "https://logicalidea.co/wp-content/uploads/2020/05/Redux.jpg",
//     },
//     {
//       id: 3,
//       title: "Node",
//       price: 6000,
//       likes: 900,
//       rating: 4,
//       imageUrl:
//         "https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1",
//     },
//     {
//       id: 4,
//       title: "Angular",
//       price: 5000,
//       likes: 200,
//       rating: 3,
//       imageUrl:
//         "https://fs.hubspotusercontent00.net/hubfs/6426302/Imported_Blog_Media/7fad34d867a32f732b37534ff013e916-3-2.jpg",
//     },
//     {
//       id: 5,
//       title: "Flutter",
//       price: 7000,
//       likes: 700,
//       rating: 4,
//       imageUrl:
//         "https://miro.medium.com/max/2000/1*PCKC8Ufml-wvb9Vjj3aaWw.jpeg",
//     },
//   ];

//   render(): React.ReactNode {
//     let coursesToBeCreated = this.courses.map(course => (
//       <Course coursedetails={course} />
//     ));
//     return (
//       <>
//         <h1>List Of Courses</h1>
//         <div className="row">{coursesToBeCreated}</div>
//       </>
//     );
//   }
// }
