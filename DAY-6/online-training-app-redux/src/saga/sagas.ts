import { call, takeLatest, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import axios from "axios";
import { CourseModel } from "../models/course.model";
import { setCourses } from "../redux/reducers/courses.reducer";

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

//Worker Saga
export function* fetchCourses() {
  try {
    console.log("Fetching courses..");
    // async
    // setCourses(response)
    const response: Response = yield call(GetCourses);
    yield put(setCourses(response.data)); // dispatching
  } catch (error) {}
}

export default function* rootSaga() {
  console.log("Root Saga..");
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
}
