import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseModel } from "../../models/course.model";
import Rating from "../atoms/rating.component";
import Title from "../atoms/title.component";

export default function CourseDetails() {
  let [course, setCourse] = useState<CourseModel>(new CourseModel());
  let { id } = useParams();

  useEffect(() => {
    async function fetchCourse() {
      try {
        let res = await fetch(`http://localhost:3000/data/courses.data.json`);
        let theCourses = await res.json();
        let cid = id ? +id : 0;
        let theCourse = theCourses.find((c: CourseModel) => c.id == cid);
        setCourse(theCourse);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCourse();
  }, []);
  return (
    <div>
      <header>
        <h1>{course.title}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={course.imageUrl}
              alt={course.title}
              height="100%"
              width="100%"
            />
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center my-1">
              <img
                src={course.avatarUrl}
                alt={course.trainerName}
                className="img-thumbnail"
                height="50px"
                width="50px"
              />{" "}
              <Title>
                <h4>{course.trainerName}</h4>
              </Title>
            </div>

            <div className="my-1">
              <Rating
                maxCount={course.rating}
                iconClasses="fa-solid fa-star"
                color="orange"
              />
            </div>
            <p>₹. {course.price}</p>
            <p>{course.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
