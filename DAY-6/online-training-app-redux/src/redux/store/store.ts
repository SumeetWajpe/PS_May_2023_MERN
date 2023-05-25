import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/courses.reducer";
import postsReducer from "../reducers/posts.reducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    posts: postsReducer,
  },
});

export default store;
