import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

let initialState: CourseModel[] = [];

export const fetchCoursesAsync = createAsyncThunk<CourseModel[]>(
  "courses/fetchAllCourses",
  async () => {
    const responseJSON = await fetch("http://localhost:3005/courses");
    const courses = await responseJSON.json();
    return courses;// The value that we return becomes the action payload  (extrareducers)
  },
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    incrementLikes: (store, action: PayloadAction<number>) => {
      let index = store.findIndex(course => course.id === action.payload);
      store[index].likes++;
      return store;
    },
    deleteCourse: (store, action: PayloadAction<number>) => {
      store = store.filter(c => c.id !== action.payload);
      return store;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCoursesAsync.fulfilled, (store, { payload }) => {
      store.push(...payload);
    });
  },
});

export const { incrementLikes, deleteCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
