import { courses } from "../models/course.model.js";
import { trainers } from "../models/trainers.model.js";
export const resolvers = {
    Query: {
        courses: async () => await courses.find({}),
        course: async (_, { id }) => await courses.findOne({ id }),
        trainers: async () => await trainers.find({}),
        trainer: async (_, { id }) => await trainers.findOne({ id }),
    },
    Course: {
        trainer: async (parent) => await trainers.findOne({ id: parent.trainerId }),
    },
    Mutation: {
        deleteCourse: async (_, { id }) => await courses.findOneAndDelete({ id }),
    },
};
