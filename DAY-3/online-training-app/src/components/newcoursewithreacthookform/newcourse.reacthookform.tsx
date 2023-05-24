import React, { useState } from "react";
import { CourseModel } from "../../models/course.model";
import { useForm } from "react-hook-form";

type CourseInput = {
  CourseId: number;
  CourseTitle: string;
  CoursePrice: number;
  CourseRating: number;
  CourseLikes: number;
  CourseTrainerName: string;
  CourseAvatarUrl: string;
  CourseImageUrl: string;
  CourseDescription: string;
};

export default function NewCourseWithReactHookForm() {
  const { register, handleSubmit } = useForm<CourseInput>();
  return (
    <div>
      <h2>New Course</h2>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <label>
            Id :{" "}
            <input
              type="number"
              className="form-control"
              {...register("CourseId")}
            />
          </label>
          <br />
          <label>
            Title :{" "}
            <input
              type="text"
              className="form-control"
              {...register("CourseTitle")}
            />
          </label>
          <br />

          <label>
            Price :{" "}
            <input
              type="number"
              className="form-control"
              {...register("CoursePrice")}
            />
          </label>
          <br />

          <label>
            Rating :{" "}
            <input
              type="number"
              className="form-control"
              {...register("CourseRating")}
            />
          </label>
          <br />

          <label>
            Likes :{" "}
            <input
              type="number"
              className="form-control"
              {...register("CourseLikes")}
            />
          </label>
          <br />

          <label>
            Trainer Name :{" "}
            <input
              type="text"
              className="form-control"
              {...register("CourseTrainerName")}
            />
          </label>
          <br />

          <label>
            Avatar Url :{" "}
            <input
              type="text"
              className="form-control"
              {...register("CourseAvatarUrl")}
            />
          </label>
          <br />

          <label>
            Image Url :{" "}
            <input
              type="text"
              className="form-control"
              {...register("CourseImageUrl")}
            />
          </label>
          <br />

          <label>
            Description :{" "}
            <input
              type="text"
              className="form-control"
              {...register("CourseDescription")}
            />
          </label>
          <br />

          <button className="btn btn-success m-1">Add New Course</button>
        </form>
      </div>
    </div>
  );
}

// e => {
//   e.preventDefault();
// fetch api(POST) -> newCourse
//     fetch("http://localhost:3005/courses", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newCourse),
//     })
//       .then(res => res.json())
//       .then(course => console.log(course));
// };
