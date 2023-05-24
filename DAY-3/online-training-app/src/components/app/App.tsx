import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";
import { Counter } from "../functional/counter";
import Posts from "../posts/posts.component";
import GetpostById from "../postbyid/getpostbyid";
import { GrandParent } from "../usingcontextapi/usingcontextapi.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CourseDetails from "../coursedetails/coursedetails.component";
import NewCourse from "../newcourse/newcourse.component";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Online Training
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/newcourse">
                    New Course
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<ListOfCourses />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/newcourse" element={<NewCourse />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
