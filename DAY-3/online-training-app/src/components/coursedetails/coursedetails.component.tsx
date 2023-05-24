import React from "react";
import { useParams } from "react-router-dom";

export default function CourseDetails() {
  let { id } = useParams();
  return (
    <div>
      <header>
        <h1>Course Details for {id}</h1>
      </header>
    </div>
  );
}
