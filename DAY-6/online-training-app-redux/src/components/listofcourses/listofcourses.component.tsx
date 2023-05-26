import Course from "../course/course.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { fetchCoursesAsync } from "../../redux/reducers/courses.reducer";
import { AppDispatch } from "../../redux/store/store";

export default function ListOfCourses() {
  const courses = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch<AppDispatch>();
  let coursesToBeCreated = courses.map(course => (
    <Course coursedetails={course} key={course.id} />
  ));

  useEffect(() => {
    dispatch(fetchCoursesAsync());
  }, []);

  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>
      <div className="row">{coursesToBeCreated}</div>
    </>
  );
}
