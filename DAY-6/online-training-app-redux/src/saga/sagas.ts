import { takeLatest } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";

//Worker Saga
export function* fetchCourses() {
  console.log("Fetching courses");
  // async
  // setCourses(response)
}

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
}
