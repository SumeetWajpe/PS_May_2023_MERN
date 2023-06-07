import { courses } from "../models/courses.model.js";
export const resolvers = {
  Query: {
    courses: () => {
      return courses;
    },
    course: (_, { id }) => {
      return courses.find(c => c.id == id);
    },
  },
};
