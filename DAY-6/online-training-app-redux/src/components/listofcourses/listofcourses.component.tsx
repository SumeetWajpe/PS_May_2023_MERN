import Course from "../course/course.component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

export default function ListOfCourses() {
  const courses = useSelector((state: RootState) => state.courses);

  let coursesToBeCreated = courses.map(course => (
    <Course coursedetails={course} key={course.id} />
  ));
  return (
    <>
      <header>
        <h1>List Of Courses</h1>
      </header>
      <div className="row">{coursesToBeCreated}</div>
    </>
  );
}
