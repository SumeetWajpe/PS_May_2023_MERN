import React, { useEffect, useState } from "react";
import { PostsModel } from "../../models/posts.model";

export default function GetpostById() {
  let newPostModel = new PostsModel(1, 1, "", "");
  let [postId, setPostId] = useState<number>(1);
  let [post, setPost] = useState<PostsModel>(newPostModel);

  useEffect(() => {
    async function fetchPost() {
      try {
        let res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );
        let thePost = await res.json();
        setPost(thePost);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPost();
  }, [postId]);
  return (
    <div>
      <label>
        Post Id :{" "}
        <input
          type="text"
          className="form-control"
          value={postId}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPostId(+e.target.value)
          }
        />{" "}
      </label>
      <h2>{post.title}</h2>
    </div>
  );
}
