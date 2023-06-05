import { call, takeLatest, put, retry } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import axios from "axios";
import { CourseModel } from "../models/course.model";
import { deleteCourse, setCourses } from "../redux/reducers/courses.reducer";
import { PostsModel } from "../models/posts.model";
import { setPosts, setPostsError } from "../redux/reducers/posts.reducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "../models/user.model";
import { addExistingUser } from "../redux/reducers/login.reducer";
import { useNavigate } from "react-router-dom";

type Response = {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

function GetCourses(token: string) {
  return axios.get<CourseModel[]>("http://localhost:3500/courses", {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
}

function GetPosts() {
  return axios.get<PostsModel[]>("https://jsonplaceholder.typicode.com/posts");
}

function AuthenticateUserFromServer(user: UserModel) {
  return axios.post("http://localhost:3500/auth/login", { name: user.name });
}

function DeleteCourse(id: number) {
  return axios.delete("http://localhost:3500/delete/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage["auth-token"]}`,
    },
  });
}

//Worker Saga
export function* fetchCourses(action: PayloadAction<string>) {
  try {
    const response: Response = yield call(GetCourses, action.payload);
    yield put(setCourses(response.data)); // dispatching
  } catch (error) {
    //yield put(handleError(error)); // dispatching an action with Error message as payload
  }
}
export function* fetchPosts() {
  try {
    console.log("Fetching posts..");
    // async
    // setCourses(response)
    const response: Response = yield call(GetPosts);
    yield put(setPosts(response.data)); // dispatching
  } catch (error: any) {
    console.log(error);
    yield put(setPostsError(error.message as string)); // dispatching an action with Error message as payload
  }
}

export function* fetchPostsWithRetry() {
  try {
    let duration = 1000;
    let response: Response = yield retry(3, duration * 10, GetPosts);
    yield put(setPosts(response.data)); // dispatching
  } catch (error: any) {
    // AxiosError type
    yield put(setPostsError(error.message as string)); // dispatching an action with Error message as payload
  }
}

export function* deleteACourse(action: PayloadAction<number>) {
  try {
    let id: number = action.payload;
    let response: Response = yield call(DeleteCourse, id);
    if (response.data.status) {
      yield put(deleteCourse(id)); // dispatching
    }
  } catch (error) {
    console.log(error); // dispatch an action for error as payload
  }
}

export function* authenticateUser(action: PayloadAction<UserModel>) {
  console.log(action);
  let user: UserModel = action.payload;
  let response: Response = yield call(AuthenticateUserFromServer, user);
  if (response.data.status) {
    localStorage["auth-token"] = response.data.token;
    yield put(addExistingUser({ user, isUserAuthenticated: true })); // dispatching
  }
}

export default function* rootSaga() {
  console.log("Root Saga..");
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
  // yield takeLatest(sagaActions.FETCH_POSTS_SAGA_ACTION, fetchPosts);
  yield takeLatest(sagaActions.FETCH_POSTS_SAGA_ACTION, fetchPostsWithRetry);
  yield takeLatest(sagaActions.DELETE_A_COURSE, deleteACourse);
  yield takeLatest(sagaActions.AUTHENTICATE_USER, authenticateUser);
}
