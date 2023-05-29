import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../reducers/courses.reducer";
import postsReducer from "../reducers/posts.reducer";
import cartReducer from "../reducers/cart.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../saga/sagas";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    posts: postsReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

const sagaMiddleware = createSagaMiddleware();

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
