import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  let { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => res.json())
      .then(postsResponse => console.log(postsResponse));
  }, []);

  return (
    <div>
      <h2>Post details for {id}</h2>
    </div>
  );
}
