import React from "react";
import ListOfCourses from "../listofcourses/listofcourses.component";
import { Message } from "../functional/message.functional";
import { Counter } from "../functional/counter";
import Posts from "../posts/posts.component";
import GetpostById from "../postbyid/getpostbyid";

export default function App() {
  // return <ListOfCourses />;
  // return <Posts />;
  return <GetpostById />;
}
