import React, { useEffect, useState } from "react";
import { PostsModel } from "../../models/posts.model";



const Posts = () => {
  let [posts, setPosts] = useState<PostsModel[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(postsResponse => setPosts(postsResponse));
  }, []);
  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        <ul>
          {posts.map(post => (
            <li>{post.title}</li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
