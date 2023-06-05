import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";
import { UserModel } from "../../models/user.model";

export type UserAuth = {
  isUserAuthenticated: boolean;
  user: UserModel;
};

const initialState: UserAuth = {
  isUserAuthenticated: false,
  user: new UserModel(),
};

export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    addExistingUser(state, action: PayloadAction<UserAuth>) {
      // new store
      state.isUserAuthenticated = action.payload.isUserAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { addExistingUser } = loginReducer.actions;
export default loginReducer.reducer;
