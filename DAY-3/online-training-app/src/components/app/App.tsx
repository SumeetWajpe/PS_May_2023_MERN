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
import PostDetails from "../postdetails/postdetails.component";
import NewCourseWithReactHookForm from "../newcoursewithreacthookform/newcourse.reacthookform";
import Header from "../header/header.component";
import Cart from "../cart/cart.component";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListOfCourses />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          {/* <Route path="/newcourse" element={<NewCourse />} /> */}
          <Route path="/newcourse" element={<NewCourseWithReactHookForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/postdetails/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
