import React, { useEffect, useState } from "react";

type PostsModel = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

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
