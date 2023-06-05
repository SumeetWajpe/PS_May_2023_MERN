import Course from "../course/course.component";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store/store";
import { sagaActions } from "../../saga/sagaActions";

export default function ListOfCourses() {
  const courses = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch<AppDispatch>();
  let coursesToBeCreated = courses.map(course => (
    <Course coursedetails={course} key={course.id} />
  ));

  useEffect(() => {
    if (courses.length === 0) {
      dispatch({
        type: sagaActions.FETCH_COURSES_SAGA_ACTION,
        payload: localStorage["auth-token"],
      });
    }
  }, [courses]);

  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>
      <div className="row">{coursesToBeCreated}</div>
    </>
  );
}
