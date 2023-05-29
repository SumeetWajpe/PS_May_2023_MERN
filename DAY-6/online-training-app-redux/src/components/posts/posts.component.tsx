import React, { useEffect, useState } from "react";
import { PostsModel } from "../../models/posts.model";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store/store";
import { sagaActions } from "../../saga/sagaActions";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  let postsData = useSelector((store: RootState) => store.posts);
  const { error, loading, posts } = postsData;

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_POSTS_SAGA_ACTION });
  }, []);

  if (loading)
    return (
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
        alt="Loading.."
      />
    );
  if (error) return <h1> Something went wrong - {error}</h1>;

  return (
    <div>
      <header>
        <h1>All Posts</h1>
      </header>
      <main>
        <ul className="list-group">
          {posts.map(post => (
            <li className="list-group-item" key={post.id}>
              {" "}
              <Link to={"/postdetails/" + post.id}>{post.title}</Link>{" "}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Posts;
