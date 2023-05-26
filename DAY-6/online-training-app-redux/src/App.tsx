import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes } from "./redux/reducers/courses.reducer";

function App() {
  const courses = useSelector((store: any) => store.courses);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {courses.length}

      <button onClick={() => dispatch(incrementLikes("100"))}>++</button>
    </div>
  );
}

export default App;
