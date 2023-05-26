import React from "react";
import { useSelector } from "react-redux";
import { CourseModel } from "../models/course.model";
import { RootState } from "../redux/store/store";

export const ListOfCourses: React.FC = () => {
  const courses: CourseModel[] = useSelector(
    (store: RootState) => store.courses,
  );
  return <div>{courses[0].likes}</div>;
};
