import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/courses.reducer";
import postsReducer from "../reducers/posts.reducer";
import cartReducer from "../reducers/cart.reducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    posts: postsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
