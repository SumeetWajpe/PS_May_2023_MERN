import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostsModel } from "../../models/posts.model";

export default function PostDetails() {
  let [thePost, setThePost] = useState<PostsModel>(new PostsModel());
  let { id } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => res.json())
      .then(postsResponse => setThePost(postsResponse))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Post details for {id}</h2>
      <ul className="list-group">
        <li className="list-group-item">Id : {thePost.id}</li>
        <li className="list-group-item">User Id : {thePost.userId}</li>
        <li className="list-group-item">Title : {thePost.title}</li>
        <li className="list-group-item">Body : {thePost.body}</li>
      </ul>
    </div>
  );
}
