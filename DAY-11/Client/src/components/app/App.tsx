import React from "react";
import Posts from "../posts/posts.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseDetails from "../coursedetails/coursedetails.component";
import PostDetails from "../postdetails/postdetails.component";
import NewCourseWithReactHookForm from "../newcoursewithreacthookform/newcourse.reacthookform";
import Cart from "../cart/cart.component";
import Error from "../error/error.component";
import ListOfCourses from "../listofcourses/listofcourses.component";
import Login from "../login/login.component";
import Dashboard from "../dashboard/dashboard.component";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index path="" element={<ListOfCourses />} />
            <Route path="coursedetails/:id" element={<CourseDetails />} />
            {/* <Route path="/newcourse" element={<NewCourse />} /> */}
            <Route path="newcourse" element={<NewCourseWithReactHookForm />} />
            <Route path="cart" element={<Cart />} />
            <Route path="posts" element={<Posts />} />
            <Route path="postdetails/:id" element={<PostDetails />} />
          </Route>

          {/* Wild card route handler - 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
