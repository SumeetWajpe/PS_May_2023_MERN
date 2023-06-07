import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfCourses from "./components/listofcourses.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Courses </Link> |<Link to="/newcourse">New Course </Link>
        <Routes>
          <Route path="/" element={<ListOfCourses />} />
          <Route path="/newcourse" element={<strong>New Course</strong>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
