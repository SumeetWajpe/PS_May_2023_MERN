import { takeLatest } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
export function* fetchCourses() {
  console.log("Fetching courses");
}

export default function* rootSaga() {
  yield takeLatest(sagaActions.FETCH_COURSES_SAGA_ACTION, fetchCourses);
}
