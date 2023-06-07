import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_COURSES } from "../graphql/querries";

export default function ListOfCourses() {
  let { loading, error, data } = useQuery(GET_ALL_COURSES);
  return (
    <div>
      <h1>List Of Courses - {data?.courses?.length}</h1>
    </div>
  );
}
