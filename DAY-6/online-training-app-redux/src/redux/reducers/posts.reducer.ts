import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostsModel } from "../../models/posts.model";

let initialState: PostsModel[] = [
  {
    id: 1,
    userId: 1,
    title: "Dummy Title",
    body: "Dummy Body !",
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store, action: PayloadAction<number>) => {
      console.log("delete Post called !");
      return store; // updated store
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
