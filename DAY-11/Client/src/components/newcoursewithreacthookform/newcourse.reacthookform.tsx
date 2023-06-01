import React from "react";
import { CourseModel } from "../../models/course.model";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { addCourse } from "../../redux/reducers/courses.reducer";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseInput>({ mode: "onChange" });
  const navigate = useNavigate();
  let dispatch = useDispatch<AppDispatch>();
  return (
    <div>
      <h2>New Course</h2>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={handleSubmit((data: CourseInput) => {
            let newCourse = new CourseModel(
              Number(data.CourseId),
              data.CourseTitle,
              data.CoursePrice,
              data.CourseRating,
              data.CourseLikes,
              data.CourseImageUrl,
              data.CourseTrainerName,
              data.CourseAvatarUrl,
              data.CourseDescription,
            );

            // fetch api(POST) -> newCourse
            fetch("http://localhost:3500/newcourse", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newCourse),
            })
              .then(res => res.json())
              .then(courseResponse => {
                if (courseResponse.status) {
                  dispatch(addCourse(courseResponse.newCourse));
                  navigate("/");
                }
              });
          })}
        >
          <label>
            Id :{" "}
            <input
              type="number"
              placeholder="Only number"
              className="form-control"
              {...register("CourseId", { required: true })}
            />
            {errors.CourseId && (
              <p style={{ color: "red" }}>Course Id is required !</p>
            )}
          </label>
          <br />
          <label>
            Title :{" "}
            <input
              type="text"
              placeholder="Max length 20 chars"
              className="form-control"
              {...register("CourseTitle", {
                required: true,

                maxLength: {
                  value: 20,
                  message: "You exceeded 20 char limit !",
                },
              })}
            />
          </label>
          {errors.CourseTitle && (
            <p style={{ color: "red" }}>
              {errors.CourseTitle.type === "maxLength"
                ? errors.CourseTitle.message
                : "Course Title is required !"}
            </p>
          )}
          <br />

          <label>
            Price :{" "}
            <input
              type="number"
              placeholder="Only number"
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
              min={0}
              max={5}
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
