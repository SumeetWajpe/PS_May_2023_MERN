import { courses } from "../models/course.model.js";
export const resolvers = {
    Query: {
        courses: async () => await courses.find({}),
        // course: (_, { id }) => ,
        // trainers: () => trainers,
        // trainer: (_, { id }) => ,
    },
};
