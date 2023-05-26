import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes } from "./redux/reducers/courses.reducer";
import { RootState } from "./redux/store/store";
import { CourseModel } from "./models/course.model";

function App() {
  const courses: CourseModel[] = useSelector(
    (store: RootState) => store.courses,
  );
  const dispatch = useDispatch();
  return (
    <div className="App">
      {courses[0].likes}

      <button onClick={() => dispatch(incrementLikes(1))}>++</button>
    </div>
  );
}

export default App;
