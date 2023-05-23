import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";
import { Counter } from "../functional/counter";
import Posts from "../posts/posts.component";
import GetpostById from "../postbyid/getpostbyid";
import { GrandParent } from "../usingcontextapi/usingcontextapi.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Courses</Link> | <Link to="/posts">Posts </Link>
        <Routes>
          <Route path="/" element={<ListOfCourses />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
