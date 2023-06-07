import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_COURSES } from "../graphql/querries";
import Course from "./course.component";
import { CourseModel } from "../models/course.model";

export default function ListOfCourses() {
  let { loading, error, data } = useQuery(GET_ALL_COURSES, {
    // fetchPolicy: "network-only",
  });

  if (loading) return <strong>Loading...</strong>;
  if (error) return <strong>Something went wrong !</strong>;
  return (
    <div>
      <h1>List Of Courses </h1>
      <div className="row">
        {data?.courses.map((course: CourseModel) => (
          <Course coursedetails={course} key={course.id} />
        ))}
      </div>
    </div>
  );
}
