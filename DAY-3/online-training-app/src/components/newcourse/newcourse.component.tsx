import React, { useState } from "react";
import { CourseModel } from "../../models/course.model";

export default function NewCourse() {
  const [newCourse, setNewCourse] = useState<CourseModel>(new CourseModel());
  return (
    <div>
      <h2>New Course</h2>
      <div className="d-flex justify-content-center align-items-center">
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(newCourse);
          }}
        >
          <label>
            Id :{" "}
            <input
              type="number"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, id: +e.target.value })
              }
            />
          </label>
          <br />
          <label>
            Title :{" "}
            <input
              type="text"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, title: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Price :{" "}
            <input
              type="number"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, price: +e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Rating :{" "}
            <input
              type="number"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, rating: +e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Likes :{" "}
            <input
              type="number"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, likes: +e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Trainer Name :{" "}
            <input
              type="text"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, trainerName: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Avatar Url :{" "}
            <input
              type="text"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, avatarUrl: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Image Url :{" "}
            <input
              type="text"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, imageUrl: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Description :{" "}
            <input
              type="text"
              className="form-control"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewCourse({ ...newCourse, description: e.target.value })
              }
            />
          </label>
          <br />

          <button className="btn btn-success m-1">Add New Course</button>
        </form>
      </div>
    </div>
  );
}
