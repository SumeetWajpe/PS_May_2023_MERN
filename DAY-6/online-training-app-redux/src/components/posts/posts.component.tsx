import React, { useEffect, useState } from "react";
import { PostsModel } from "../../models/posts.model";
import { Link } from "react-router-dom";

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
        {posts.length === 0 ? (
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="Loading.."
          />
        ) : (
          <ul className="list-group">
            {posts.map(post => (
              <li className="list-group-item" key={post.id}>
                {" "}
                <Link to={"/postdetails/" + post.id}>{post.title}</Link>{" "}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Posts;
