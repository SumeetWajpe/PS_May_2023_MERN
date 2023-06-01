import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostsModel } from "../../models/posts.model";

type PostsInitialState = {
  error: string;
  loading: boolean;
  posts: PostsModel[];
};

let initialState: PostsInitialState = {
  error: "",
  loading: true,
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store, action: PayloadAction<number>) => {
      console.log("delete Post called !");
      //store.filter(); // updated store
    },
    setPosts: (store, action: PayloadAction<PostsModel[]>) => {
      store.loading = false;
      store.posts.push(...action.payload);
    },
    setPostsError: (store, action: PayloadAction<string>) => {
      store.loading = false;
      store.error = action.payload;
    },
  },
});

export const { deletePost, setPosts, setPostsError } = postsSlice.actions;
export default postsSlice.reducer;
