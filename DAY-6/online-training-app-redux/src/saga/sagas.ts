import { call, takeLatest, put, retry } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import axios from "axios";
import { CourseModel } from "../models/course.model";
import { setCourses } from "../redux/reducers/courses.reducer";
import { PostsModel } from "../models/posts.model";
import { setPosts, setPostsError } from "../redux/reducers/posts.reducer";

type Response = {
  data: any;
  config: any;
  headers: any;
  request: any;
  status: number;
  statusText: string;
};

function GetCourses() {
  return axios.get<CourseModel[]>("http://localhost:3005/courses");
}

function GetPosts() {
  return axios.get<PostsModel[]>("https://jsonplaceholder.typicode.com/posts");
}

//Worker Saga
export function* fetchCourses() {
  try {
    console.log("Fetching courses..");
    // async
    // setCourses(response)
    const response: Response = yield call(GetCourses);
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
export default function* rootSaga() {
  console.log("Root Saga..");
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
  // yield takeLatest(sagaActions.FETCH_POSTS_SAGA_ACTION, fetchPosts);
  yield takeLatest(sagaActions.FETCH_POSTS_SAGA_ACTION, fetchPostsWithRetry);
}
