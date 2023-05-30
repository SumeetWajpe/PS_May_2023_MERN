import React, { Suspense } from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";
import { Counter } from "../functional/counter";
// import Posts from "../posts/posts.component";
import GetpostById from "../postbyid/getpostbyid";
import { GrandParent } from "../usingcontextapi/usingcontextapi.component";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CourseDetails from "../coursedetails/coursedetails.component";
import NewCourse from "../newcourse/newcourse.component";
import PostDetails from "../postdetails/postdetails.component";
import NewCourseWithReactHookForm from "../newcoursewithreacthookform/newcourse.reacthookform";
import Header from "../header/header.component";
import Cart from "../cart/cart.component";
import Error from "../error/error.component";
import Login from "../login/login.component";
import Dashboard from "../dashboard/dashboard.component";
import Account from "../account/account.component";
import Profile from "../profile/profile.component";

const Posts = React.lazy(() => import("../posts/posts.component")); // create a seperate bundle for posts component

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
          <Route
            path="/posts"
            element={
              <Suspense fallback={<strong>Loading...</strong>}>
                <Posts />
              </Suspense>
            }
          />
          <Route path="/postdetails/:id" element={<PostDetails />} />

          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Account />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          {/* Wild card route handler - 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
