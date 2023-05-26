import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/courses.reducer";
import postsReducer from "../reducers/posts.reducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
